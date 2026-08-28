import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { aktuellerBenutzer } from "@/lib/session";
import { istBearbeitbar } from "@/lib/anzeigen";

/** Lädt eine Anzeige und prüft, ob sie dem angemeldeten Benutzer gehört. */
async function eigeneAnzeige(id: string, userId: string) {
  const anzeige = await prisma.anfrage.findUnique({
    where: { id },
    include: { branche: { select: { id: true, name: true } } },
  });
  if (!anzeige || anzeige.userId !== userId) return null;
  return anzeige;
}

/** GET — eine eigene Anzeige laden. */
export async function GET(_request: NextRequest, { params }: { params: { id: string } }) {
  const user = await aktuellerBenutzer();
  if (!user) return NextResponse.json({ error: "Nicht angemeldet" }, { status: 401 });

  const anzeige = await eigeneAnzeige(params.id, user.id);
  if (!anzeige) return NextResponse.json({ error: "Anzeige nicht gefunden" }, { status: 404 });

  return NextResponse.json(anzeige);
}

/** PATCH — Entwurf bearbeiten. */
export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const user = await aktuellerBenutzer();
  if (!user) return NextResponse.json({ error: "Nicht angemeldet" }, { status: 401 });

  const anzeige = await eigeneAnzeige(params.id, user.id);
  if (!anzeige) return NextResponse.json({ error: "Anzeige nicht gefunden" }, { status: 404 });

  if (!istBearbeitbar(anzeige.status)) {
    return NextResponse.json(
      { error: "Diese Anzeige kann gerade nicht bearbeitet werden." },
      { status: 409 }
    );
  }

  try {
    const body = await request.json();

    // Nur ausdrücklich erlaubte Felder übernehmen — kein Durchreichen von userId,
    // status, anzeigenId oder Operator-Feldern.
    const text = (v: unknown) => (typeof v === "string" ? v.trim() : undefined);
    const liste = (v: unknown) => (Array.isArray(v) ? v.map(String) : undefined);

    const daten: Record<string, unknown> = {};
    const setze = (key: string, wert: unknown) => {
      if (wert !== undefined) daten[key] = wert;
    };

    setze("firmenname", text(body.firmenname));
    setze("standort", text(body.standort));
    setze("website", text(body.website) || null);
    setze("beschreibung", text(body.beschreibung));
    setze("ziel", text(body.ziel));
    setze("persönlicherTouch", text(body.persoenlicherTouch) ?? text(body.persönlicherTouch));
    setze("mustHaves", text(body.mustHaves) || null);
    setze("niceToHaves", text(body.niceToHaves) || null);
    setze("gesuchteBranche", text(body.gesuchteBranche) || null);
    setze("motivation", text(body.motivation) || null);
    setze("ansprechpartner", text(body.ansprechpartner));
    setze("email", text(body.email));
    setze("telefon", text(body.telefon) || null);
    setze("ziele", liste(body.ziele));
    setze("partnerErwartungen", liste(body.partnerErwartungen));
    setze("zielgruppe", liste(body.zielgruppe));

    if (body.brancheId) setze("brancheId", String(body.brancheId));
    if (body.richtung === "de_dk" || body.richtung === "dk_de") setze("richtung", body.richtung);
    if (["lieferant", "kunden", "kooperation", "vertrieb"].includes(body.art)) setze("art", body.art);
    if (["idee", "konzept", "bereit", "sofort"].includes(body.reifegrad)) setze("reifegrad", body.reifegrad);
    if (["intern", "anonym", "oeffentlich"].includes(body.sichtbarkeit)) setze("sichtbarkeit", body.sichtbarkeit);

    if (body.reifegradScore !== undefined && body.reifegradScore !== null && body.reifegradScore !== "") {
      const n = parseInt(String(body.reifegradScore), 10);
      if (!Number.isNaN(n) && n >= 1 && n <= 10) setze("reifegradScore", n);
    }

    // Antwort auf Rückfragen — nur wenn welche offen sind.
    if (anzeige.status === "rueckfragen_offen" && text(body.antwortAufRueckfragen)) {
      setze("antwortAufRueckfragen", text(body.antwortAufRueckfragen));
    }

    const aktualisiert = await prisma.anfrage.update({
      where: { id: anzeige.id },
      data: daten,
      include: { branche: { select: { id: true, name: true } } },
    });

    return NextResponse.json(aktualisiert);
  } catch (error) {
    console.error("[Anzeige bearbeiten] Fehler:", error);
    return NextResponse.json({ error: "Die Änderungen konnten nicht gespeichert werden." }, { status: 500 });
  }
}

/** DELETE — Entwurf löschen. Nur Entwürfe, nie eingereichte Anzeigen. */
export async function DELETE(_request: NextRequest, { params }: { params: { id: string } }) {
  const user = await aktuellerBenutzer();
  if (!user) return NextResponse.json({ error: "Nicht angemeldet" }, { status: 401 });

  const anzeige = await eigeneAnzeige(params.id, user.id);
  if (!anzeige) return NextResponse.json({ error: "Anzeige nicht gefunden" }, { status: 404 });

  if (anzeige.status !== "entwurf") {
    return NextResponse.json(
      { error: "Nur Entwürfe können gelöscht werden. Eingereichte Anzeigen archivieren wir für Sie." },
      { status: 409 }
    );
  }

  try {
    await prisma.anfrage.delete({ where: { id: anzeige.id } });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[Anzeige löschen] Fehler:", error);
    return NextResponse.json({ error: "Die Anzeige konnte nicht gelöscht werden." }, { status: 500 });
  }
}
