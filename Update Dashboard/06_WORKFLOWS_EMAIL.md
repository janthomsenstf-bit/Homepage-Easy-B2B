# EasyB2B — Workflows, E-Mail & Automatisierungen

## E-Mail (Resend)

```typescript
// lib/email.ts
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendeEmail(params: {
  an: string;
  betreff: string;
  text: string;
  anfrageId?: string;
  interessentId?: string;
}) {
  const result = await resend.emails.send({
    from: 'EasyB2B <noreply@easyb2b.de>',
    to: params.an,
    subject: params.betreff,
    text: params.text,
  });

  // Immer loggen
  await prisma.emailLog.create({
    data: {
      an: params.an,
      betreff: params.betreff,
      typ: 'benachrichtigung_betreiber', // anpassen je nach Typ
      anfrageId: params.anfrageId,
      interessentId: params.interessentId,
      erfolg: !result.error,
    }
  });

  return result;
}
```

---

## E-Mail-Typen & Trigger

| Typ | Trigger | Empfänger | Automatisch? |
|-----|---------|-----------|--------------|
| Eingangsbestätigung Interessent | Formular abgesendet | Interessent | Ja |
| Neue Anfrage (intern) | Interessent eingegangen | Betreiber | Ja |
| Kontaktdaten (anonym) | Betreiber gibt Freigabe | Suchender | Ja |
| Kontaktdaten (öffentlich) | Betreiber gibt Freigabe | Suchender + Interessent | Ja |
| Kontakt weitergegeben | Freigabe | Interessent | Ja |
| Reminder Tag 5 | Cron-Job | Suchender | Ja |
| Reminder Tag 10 | Cron-Job | Interessent | Ja |
| Stalled-Alarm | Cron-Job | Betreiber | Ja |
| Ablauf-Warnung 7 Tage | Cron-Job | Betreiber | Ja |

---

## Cron-Jobs (täglich 08:00)

### Route: app/api/cron/daily/route.ts

```typescript
export async function GET(request: Request) {
  // Sicherheit: nur von Cron-Service aufrufbar
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  const heute = new Date();

  // 1. Follow-up Tag 5
  const tag5Fälle = await prisma.interessent.findMany({
    where: {
      status: 'kontakt_laeuft',
      reminder5Gesendet: false,
      kontaktDatum: {
        lte: new Date(heute.getTime() - 5 * 24 * 60 * 60 * 1000)
      }
    },
    include: { anfrage: true }
  });
  for (const fall of tag5Fälle) {
    await sendeReminder5(fall);
    await prisma.interessent.update({
      where: { id: fall.id },
      data: { reminder5Gesendet: true }
    });
  }

  // 2. Follow-up Tag 10
  const tag10Fälle = await prisma.interessent.findMany({
    where: {
      status: 'kontakt_laeuft',
      reminder10Gesendet: false,
      kontaktDatum: {
        lte: new Date(heute.getTime() - 10 * 24 * 60 * 60 * 1000)
      }
    },
    include: { anfrage: true }
  });
  for (const fall of tag10Fälle) {
    await sendeReminder10(fall);
    await prisma.interessent.update({
      where: { id: fall.id },
      data: { reminder10Gesendet: true }
    });
  }

  // 3. Stalled setzen (Tag 14)
  const stalledFälle = await prisma.interessent.findMany({
    where: {
      status: 'kontakt_laeuft',
      stalledGesetzt: false,
      kontaktDatum: {
        lte: new Date(heute.getTime() - 14 * 24 * 60 * 60 * 1000)
      }
    }
  });
  for (const fall of stalledFälle) {
    await prisma.interessent.update({
      where: { id: fall.id },
      data: { status: 'stalled', stalledGesetzt: true }
    });
    await sendeStalledAlarm(fall);
  }

  // 4. Anzeigen die in 7 Tagen ablaufen
  const ablaufWarnung = await prisma.anfrage.findMany({
    where: {
      status: 'aktiv',
      gueltigBis: {
        gte: heute,
        lte: new Date(heute.getTime() + 7 * 24 * 60 * 60 * 1000)
      }
    }
  });
  for (const anfrage of ablaufWarnung) {
    await sendeAblaufWarnung(anfrage);
  }

  // 5. Abgelaufene Anzeigen archivieren
  await prisma.anfrage.updateMany({
    where: {
      status: { in: ['aktiv', 'interessent_vorhanden'] },
      gueltigBis: { lt: heute }
    },
    data: { status: 'archiviert' }
  });

  return Response.json({ ok: true, verarbeitet: {
    tag5: tag5Fälle.length,
    tag10: tag10Fälle.length,
    stalled: stalledFälle.length,
    ablaufWarnungen: ablaufWarnung.length
  }});
}
```

### Cron auf Hostinger einrichten:
```bash
# crontab -e
0 8 * * * curl -H "Authorization: Bearer CRON_SECRET" https://easyb2b.de/api/cron/daily
```

---

## Blacklist-Prüfung

```typescript
// Bei jedem neuen Interessenten-Submit
async function prüfeBlacklist(email: string): Promise<boolean> {
  const eintrag = await prisma.blacklist.findUnique({
    where: { email: email.toLowerCase() }
  });
  return !!eintrag; // true = gesperrt
}

// Wenn gesperrt: kein Datensatz anlegen, keine Bestätigung senden
// Interessent sieht neutrale Fehlermeldung: "Technischer Fehler, bitte später erneut versuchen"
```

---

## Workflow-Status-Übergänge

```
ANFRAGE:
eingehend → (reviewOk=true) → aktiv
aktiv → (1. Interessent) → interessent_vorhanden
aktiv → (Datum überschritten) → archiviert
interessent_vorhanden → (Freigabe) → kontakt_laeuft
kontakt_laeuft → (Erfolg gemeldet) → vermittelt
kontakt_laeuft → (Tag 14) → stalled

INTERESSENT:
neu → (Betreiber gibt Freigabe) → freigegeben
freigegeben → (E-Mail gesendet) → kontakt_laeuft
kontakt_laeuft → (Feedback positiv) → erfolgreich
kontakt_laeuft → (Tag 14 keine Reaktion) → stalled
neu/freigegeben → (Betreiber markiert) → spam
```

---

## Umgebungsvariablen (.env)

```env
DATABASE_URL="postgresql://user:password@localhost:5432/easyb2b"
NEXTAUTH_SECRET="[generieren mit: openssl rand -base64 32]"
NEXTAUTH_URL="https://easyb2b.de"
ANTHROPIC_API_KEY="sk-ant-..."
RESEND_API_KEY="re_..."
CRON_SECRET="[generieren mit: openssl rand -base64 32]"
BETREIBER_EMAIL="betreiber@easyb2b.de"
BETREIBER_PASSWORD_HASH="[bcrypt hash]"
```
