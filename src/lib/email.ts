// E-Mail-Service für Easy-B2B Homepage (Resend)
// Fehlschläge werden geloggt aber nicht weitergegeben — App läuft auch ohne E-Mail.

import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const FROM = process.env.RESEND_FROM_EMAIL || 'Easy-B2B <noreply@easyb2b.de>';
const OPERATOR = process.env.OPERATOR_EMAIL || 'operator@easyb2b.de';

// ─── Hilfsfunktionen ────────────────────────────────────────────

function richtungLabel(r: string) {
  return r === 'de_dk' ? '🇩🇪 → 🇩🇰 Deutschland nach Dänemark' : '🇩🇰 → 🇩🇪 Dänemark nach Deutschland';
}

async function sende(to: string, subject: string, html: string, typ: string) {
  if (!resend) {
    console.warn(`[Email] RESEND_API_KEY nicht gesetzt – E-Mail "${typ}" nicht gesendet an ${to}`);
    return { success: false, error: 'kein_api_key' };
  }
  try {
    const { error } = await resend.emails.send({ from: FROM, to, subject, html });
    if (error) {
      console.error(`[Email] Fehler beim Senden (${typ}):`, error);
      return { success: false, error };
    }
    console.log(`[Email] ✓ ${typ} → ${to}`);
    return { success: true };
  } catch (err) {
    console.error(`[Email] Exception (${typ}):`, err);
    return { success: false, error: err };
  }
}

// ─── 1. Neue Anfrage → Operator ────────────────────────────────

export async function mailNeueAnfrage(anfrage: {
  anzeigenId: string;
  firmenname: string;
  richtung: string;
  branche: string;
  ziel: string;
  ansprechpartner: string;
  email: string;
  telefon?: string | null;
}) {
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
      <div style="background:#003366;padding:20px 24px;border-radius:8px 8px 0 0">
        <h1 style="color:white;margin:0;font-size:20px">📋 Neue Anfrage eingegangen</h1>
        <p style="color:#a8c4e0;margin:4px 0 0 0;font-size:13px">Easy-B2B Matchmaking · ${new Date().toLocaleDateString('de-DE')}</p>
      </div>
      <div style="background:white;padding:24px;border:1px solid #e0e0e0;border-top:none">
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:8px 0;color:#666;width:140px">Anzeigen-ID</td><td style="padding:8px 0;font-weight:bold;color:#003366">${anfrage.anzeigenId}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Firma</td><td style="padding:8px 0;font-weight:bold">${anfrage.firmenname}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Richtung</td><td style="padding:8px 0">${richtungLabel(anfrage.richtung)}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Branche</td><td style="padding:8px 0">${anfrage.branche}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Ziel</td><td style="padding:8px 0">${anfrage.ziel}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Ansprechpartner</td><td style="padding:8px 0">${anfrage.ansprechpartner}</td></tr>
          <tr><td style="padding:8px 0;color:#666">E-Mail</td><td style="padding:8px 0"><a href="mailto:${anfrage.email}" style="color:#003366">${anfrage.email}</a></td></tr>
          ${anfrage.telefon ? `<tr><td style="padding:8px 0;color:#666">Telefon</td><td style="padding:8px 0">${anfrage.telefon}</td></tr>` : ''}
        </table>
        <div style="margin-top:20px;padding:12px 16px;background:#f0f4ff;border-radius:6px;font-size:13px;color:#444">
          <strong>Nächster Schritt:</strong> Anfrage prüfen, ggf. freigeben und im Dashboard veröffentlichen.
        </div>
        <div style="margin-top:16px">
          <a href="https://easyb2b-dashboard.vercel.app/dashboard/anfragen" style="display:inline-block;padding:10px 20px;background:#003366;color:white;text-decoration:none;border-radius:6px;font-size:13px;font-weight:bold">→ Im Dashboard prüfen</a>
        </div>
      </div>
      <div style="padding:12px 24px;font-size:11px;color:#999;text-align:center">Easy-B2B · Deutsch-Dänisches Matchmaking-Netzwerk</div>
    </div>`;

  return sende(OPERATOR, `📋 Neue Anfrage: ${anfrage.firmenname} (${anfrage.anzeigenId})`, html, 'neue_anfrage_operator');
}

// ─── 2. Anfrage-Bestätigung → Suchender ────────────────────────

export async function mailAnfrageBestaetigung(anfrage: {
  anzeigenId: string;
  firmenname: string;
  ziel: string;
  ansprechpartner: string;
  email: string;
}) {
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
      <div style="background:#003366;padding:20px 24px;border-radius:8px 8px 0 0">
        <h1 style="color:white;margin:0;font-size:20px">✅ Ihre Anfrage ist eingegangen</h1>
        <p style="color:#a8c4e0;margin:4px 0 0 0;font-size:13px">Easy-B2B Matchmaking</p>
      </div>
      <div style="background:white;padding:24px;border:1px solid #e0e0e0;border-top:none">
        <p style="font-size:15px">Hallo ${anfrage.ansprechpartner},</p>
        <p style="line-height:1.6">vielen Dank – Ihre Anfrage bei Easy-B2B ist erfolgreich eingegangen. Wir prüfen sie innerhalb von <strong>1–2 Werktagen</strong> und geben sie dann für den Marktplatz frei.</p>
        <div style="padding:16px;background:#f0f4ff;border-radius:8px;margin:16px 0">
          <div style="font-size:12px;color:#666;margin-bottom:4px">Ihre Referenz-Nummer</div>
          <div style="font-size:22px;font-weight:bold;color:#003366;letter-spacing:1px">${anfrage.anzeigenId}</div>
        </div>
        <p style="font-size:13px;color:#444"><strong>Ihr Ziel:</strong> ${anfrage.ziel}</p>
        <p style="line-height:1.6;font-size:14px">Sobald Interessenten auf Ihre Anfrage reagieren, erhalten Sie eine Benachrichtigung. Wir prüfen jeden Interessenten sorgfältig, bevor wir Kontaktdaten weitergeben.</p>
        <div style="margin-top:20px;padding:12px 16px;background:#e8f5e9;border-radius:6px;font-size:13px;color:#2e7d32">
          <strong>Was passiert als Nächstes?</strong><br>
          1. Wir prüfen Ihre Anfrage (1–2 Werktage)<br>
          2. Wir veröffentlichen sie im Easy-B2B Marktplatz<br>
          3. Interessenten können sich melden<br>
          4. Wir prüfen jeden Interessenten und stellen bei Eignung den Kontakt her
        </div>
      </div>
      <div style="padding:12px 24px;font-size:11px;color:#999;text-align:center">Easy-B2B · Deutsch-Dänisches Matchmaking-Netzwerk · Fragen? Antworten Sie auf diese E-Mail.</div>
    </div>`;

  return sende(anfrage.email, `✅ Easy-B2B Anfrage bestätigt: ${anfrage.anzeigenId}`, html, 'anfrage_bestaetigung');
}

// ─── 3. Neues Interesse → Operator ─────────────────────────────

export async function mailNeuesInteresse(data: {
  interessentFirma: string;
  interessentName: string;
  interessentEmail: string;
  interessentTelefon?: string | null;
  anfrageId: string;
  anfrageFirma: string;
  anfrageAnzeigenId: string;
  anfrageZiel: string;
}) {
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
      <div style="background:#4CAF50;padding:20px 24px;border-radius:8px 8px 0 0">
        <h1 style="color:white;margin:0;font-size:20px">👥 Neues Interesse</h1>
        <p style="color:#c8e6c9;margin:4px 0 0 0;font-size:13px">Easy-B2B Matchmaking · ${new Date().toLocaleDateString('de-DE')}</p>
      </div>
      <div style="background:white;padding:24px;border:1px solid #e0e0e0;border-top:none">
        <div style="display:grid;gap:16px">
          <div style="padding:16px;background:#f8f9fa;border-radius:8px">
            <div style="font-size:11px;font-weight:bold;color:#666;letter-spacing:0.5px;margin-bottom:8px">INTERESSENT</div>
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:5px 0;color:#666;width:140px">Firma</td><td style="padding:5px 0;font-weight:bold">${data.interessentFirma}</td></tr>
              <tr><td style="padding:5px 0;color:#666">Ansprechpartner</td><td style="padding:5px 0">${data.interessentName}</td></tr>
              <tr><td style="padding:5px 0;color:#666">E-Mail</td><td style="padding:5px 0"><a href="mailto:${data.interessentEmail}" style="color:#003366">${data.interessentEmail}</a></td></tr>
              ${data.interessentTelefon ? `<tr><td style="padding:5px 0;color:#666">Telefon</td><td style="padding:5px 0">${data.interessentTelefon}</td></tr>` : ''}
            </table>
          </div>
          <div style="padding:16px;background:#f0f4ff;border-radius:8px">
            <div style="font-size:11px;font-weight:bold;color:#666;letter-spacing:0.5px;margin-bottom:8px">ANFRAGE (${data.anfrageAnzeigenId})</div>
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:5px 0;color:#666;width:140px">Suchende Firma</td><td style="padding:5px 0;font-weight:bold">${data.anfrageFirma}</td></tr>
              <tr><td style="padding:5px 0;color:#666">Ziel</td><td style="padding:5px 0">${data.anfrageZiel}</td></tr>
            </table>
          </div>
        </div>
        <div style="margin-top:20px">
          <a href="https://easyb2b-dashboard.vercel.app/dashboard/interessenten" style="display:inline-block;padding:10px 20px;background:#003366;color:white;text-decoration:none;border-radius:6px;font-size:13px;font-weight:bold">→ Im Dashboard prüfen</a>
        </div>
      </div>
      <div style="padding:12px 24px;font-size:11px;color:#999;text-align:center">Easy-B2B · Deutsch-Dänisches Matchmaking-Netzwerk</div>
    </div>`;

  return sende(OPERATOR, `👥 Neues Interesse: ${data.interessentFirma} → ${data.anfrageAnzeigenId}`, html, 'neues_interesse_operator');
}

// ─── 4. Interessenten-Bestätigung → Interessent ────────────────

export async function mailInteresseBestaetigung(data: {
  interessentName: string;
  interessentEmail: string;
  anfrageFirma: string;
  anfrageAnzeigenId: string;
}) {
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
      <div style="background:#003366;padding:20px 24px;border-radius:8px 8px 0 0">
        <h1 style="color:white;margin:0;font-size:20px">✅ Ihr Interesse wurde registriert</h1>
        <p style="color:#a8c4e0;margin:4px 0 0 0;font-size:13px">Easy-B2B Matchmaking</p>
      </div>
      <div style="background:white;padding:24px;border:1px solid #e0e0e0;border-top:none">
        <p style="font-size:15px">Hallo ${data.interessentName},</p>
        <p style="line-height:1.6">vielen Dank für Ihr Interesse an der Anfrage von <strong>${data.anfrageFirma}</strong> (${data.anfrageAnzeigenId}) auf Easy-B2B.</p>
        <div style="margin:20px 0;padding:16px;background:#e8f5e9;border-radius:8px;font-size:13px;color:#2e7d32">
          <strong>Wie geht es weiter?</strong><br><br>
          1. 🔍 Wir prüfen Ihr Unternehmensprofil (2–3 Werktage)<br>
          2. 📞 Bei positiver Prüfung stellen wir den Kontakt her<br>
          3. 🤝 Sie erhalten die Kontaktdaten des Suchenden
        </div>
        <p style="font-size:13px;line-height:1.6;color:#555">Easy-B2B ist ein <strong>kuratiertes Netzwerk</strong> – wir prüfen jeden Interessenten sorgfältig, bevor wir Kontaktdaten weitergeben. Das schützt alle Beteiligten.</p>
        <p style="font-size:13px;color:#555">Bei Fragen antworten Sie einfach auf diese E-Mail.</p>
      </div>
      <div style="padding:12px 24px;font-size:11px;color:#999;text-align:center">Easy-B2B · Deutsch-Dänisches Matchmaking-Netzwerk</div>
    </div>`;

  return sende(data.interessentEmail, `✅ Ihr Interesse bei Easy-B2B ist registriert (${data.anfrageAnzeigenId})`, html, 'interesse_bestaetigung');
}

// ─── 5. Intro-Mail → Suchender (kommt aus Dashboard) ───────────

export async function mailIntroAnSuchenden(data: {
  suchendeEmail: string;
  suchenderName: string;
  anfrageFirma: string;
  anfrageAnzeigenId: string;
  interessentFirma: string;
  interessentName: string;
  interessentEmail: string;
  interessentTelefon?: string | null;
  operatorNotiz?: string;
}) {
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
      <div style="background:#003366;padding:20px 24px;border-radius:8px 8px 0 0">
        <h1 style="color:white;margin:0;font-size:20px">🤝 Easy-B2B stellt vor</h1>
        <p style="color:#a8c4e0;margin:4px 0 0 0;font-size:13px">Kontaktherstellung · ${new Date().toLocaleDateString('de-DE')}</p>
      </div>
      <div style="background:white;padding:24px;border:1px solid #e0e0e0;border-top:none">
        <p style="font-size:15px">Hallo ${data.suchenderName},</p>
        <p style="line-height:1.6">wir haben einen Interessenten für Ihre Anfrage <strong>${data.anfrageAnzeigenId}</strong> geprüft und freigegeben. Hier sind die Kontaktdaten:</p>
        <div style="margin:20px 0;padding:20px;background:#e8f5e9;border:2px solid #4CAF50;border-radius:8px">
          <div style="font-size:11px;font-weight:bold;color:#2e7d32;letter-spacing:0.5px;margin-bottom:12px">✅ FREIGEGEBENER INTERESSENT</div>
          <div style="font-size:16px;font-weight:bold;color:#1b5e20;margin-bottom:8px">${data.interessentFirma}</div>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr><td style="padding:5px 0;color:#555;width:130px">Ansprechpartner</td><td style="padding:5px 0;font-weight:bold">${data.interessentName}</td></tr>
            <tr><td style="padding:5px 0;color:#555">E-Mail</td><td style="padding:5px 0"><a href="mailto:${data.interessentEmail}" style="color:#003366;font-weight:bold">${data.interessentEmail}</a></td></tr>
            ${data.interessentTelefon ? `<tr><td style="padding:5px 0;color:#555">Telefon</td><td style="padding:5px 0;font-weight:bold">${data.interessentTelefon}</td></tr>` : ''}
          </table>
        </div>
        ${data.operatorNotiz ? `<div style="padding:12px 16px;background:#fff8e1;border-radius:6px;font-size:13px;color:#8a6d00;margin-bottom:16px"><strong>Hinweis von Easy-B2B:</strong> ${data.operatorNotiz}</div>` : ''}
        <p style="font-size:13px;line-height:1.6;color:#555">Wir empfehlen, innerhalb von <strong>3–5 Werktagen</strong> Kontakt aufzunehmen. Der Interessent wurde über die Kontaktherstellung informiert.</p>
        <div style="margin-top:16px;padding:12px;background:#f5f5f5;border-radius:6px;font-size:12px;color:#666">
          💡 <strong>Tipp für den ersten Kontakt:</strong> Nennen Sie Easy-B2B als gemeinsamen Kontext – das schafft sofort Vertrauen.
        </div>
      </div>
      <div style="padding:12px 24px;font-size:11px;color:#999;text-align:center">Easy-B2B · Deutsch-Dänisches Matchmaking-Netzwerk · Bitte geben Sie uns nach dem Gespräch kurz Feedback.</div>
    </div>`;

  return sende(data.suchendeEmail, `🤝 Easy-B2B Kontakt: ${data.interessentFirma} hat Interesse an Ihrer Anfrage (${data.anfrageAnzeigenId})`, html, 'intro_suchender');
}

// ─── 6. Intro-Mail → Interessent (kommt aus Dashboard) ──────────

export async function mailIntroAnInteressenten(data: {
  interessentEmail: string;
  interessentName: string;
  interessentFirma: string;
  anfrageAnzeigenId: string;
  anfrageFirma: string;
  anfrageName: string;
  anfrageEmail: string;
  anfrageTelefon?: string | null;
  operatorNotiz?: string;
}) {
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
      <div style="background:#003366;padding:20px 24px;border-radius:8px 8px 0 0">
        <h1 style="color:white;margin:0;font-size:20px">🤝 Ihr Interesse wurde freigegeben</h1>
        <p style="color:#a8c4e0;margin:4px 0 0 0;font-size:13px">Kontaktherstellung · ${new Date().toLocaleDateString('de-DE')}</p>
      </div>
      <div style="background:white;padding:24px;border:1px solid #e0e0e0;border-top:none">
        <p style="font-size:15px">Hallo ${data.interessentName},</p>
        <p style="line-height:1.6">gute Neuigkeit! Ihr Interesse an der Anfrage <strong>${data.anfrageAnzeigenId}</strong> wurde geprüft und freigegeben. Hier sind die Kontaktdaten des Suchenden:</p>
        <div style="margin:20px 0;padding:20px;background:#e8f5e9;border:2px solid #4CAF50;border-radius:8px">
          <div style="font-size:11px;font-weight:bold;color:#2e7d32;letter-spacing:0.5px;margin-bottom:12px">✅ SUCHENDE FIRMA (Kontaktdaten)</div>
          <div style="font-size:16px;font-weight:bold;color:#1b5e20;margin-bottom:8px">${data.anfrageFirma}</div>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr><td style="padding:5px 0;color:#555;width:130px">Ansprechpartner</td><td style="padding:5px 0;font-weight:bold">${data.anfrageName}</td></tr>
            <tr><td style="padding:5px 0;color:#555">E-Mail</td><td style="padding:5px 0"><a href="mailto:${data.anfrageEmail}" style="color:#003366;font-weight:bold">${data.anfrageEmail}</a></td></tr>
            ${data.anfrageTelefon ? `<tr><td style="padding:5px 0;color:#555">Telefon</td><td style="padding:5px 0;font-weight:bold">${data.anfrageTelefon}</td></tr>` : ''}
          </table>
        </div>
        ${data.operatorNotiz ? `<div style="padding:12px 16px;background:#fff8e1;border-radius:6px;font-size:13px;color:#8a6d00;margin-bottom:16px"><strong>Hinweis von Easy-B2B:</strong> ${data.operatorNotiz}</div>` : ''}
        <p style="font-size:13px;line-height:1.6;color:#555">Wir empfehlen, innerhalb von <strong>3–5 Werktagen</strong> Kontakt aufzunehmen. Nennen Sie Easy-B2B als gemeinsamen Kontext – das schafft sofort Vertrauen.</p>
      </div>
      <div style="padding:12px 24px;font-size:11px;color:#999;text-align:center">Easy-B2B · Deutsch-Dänisches Matchmaking-Netzwerk · Bitte geben Sie uns Feedback nach dem ersten Gespräch.</div>
    </div>`;

  return sende(data.interessentEmail, `🤝 Easy-B2B: Kontakt zu ${data.anfrageFirma} freigegeben (${data.anfrageAnzeigenId})`, html, 'intro_interessent');
}
