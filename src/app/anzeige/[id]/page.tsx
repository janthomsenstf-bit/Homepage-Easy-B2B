import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";
import styles from "./page.module.css";

interface AnzeigeDetailProps {
  params: {
    id: string;
  };
}

interface Vorbereitung {
  produktunterlagen?: boolean;
  preislisten?: boolean;
  zertifikate?: boolean;
  produktproben?: boolean;
  marketingmaterial?: boolean;
  referenzen?: boolean;
  webseiteDeutsch?: boolean;
  notiz?: string;
}

export default async function AnzeigeDetailPage({ params }: AnzeigeDetailProps) {
  const anfrage = await prisma.anfrage.findFirst({
    where: {
      OR: [
        { id: params.id },
        { anzeigenId: params.id },
      ],
    },
    include: {
      branche: true,
      interessenten: {
        where: { status: "freigegeben" },
        select: { id: true, firmenname: true, ansprechpartner: true },
      },
    },
  });

  if (!anfrage) notFound();

  if (
    anfrage.status !== "aktiv" ||
    (anfrage.sichtbarkeit !== "oeffentlich" && anfrage.sichtbarkeit !== "anonym")
  ) {
    notFound();
  }

  const getRichtungDisplay = (dbRichtung: string): string => {
    if (dbRichtung === "de_dk") return "🇩🇪 → 🇩🇰 Deutschland → Dänemark";
    if (dbRichtung === "dk_de") return "🇩🇰 → 🇩🇪 Dänemark → Deutschland";
    return dbRichtung;
  };

  const reifegrad_colors: Record<string, string> = {
    Idee: "#94a3b8",
    Konzept: "#f59e0b",
    Bereit: "#3b82f6",
    Sofort: "#10b981",
  };

  // ── Reifegrad / Konkretisierungsgrad (1-10 Skala) ──
  const reifegradScore: number = anfrage.reifegradScore || (() => {
    // Fallback: alten Enum auf Zahlenwert mappen
    const map: Record<string, number> = { idee: 2, konzept: 5, bereit: 7, sofort: 10 };
    return map[anfrage.reifegrad] || 5;
  })();

  const getReifegradLabel = (score: number): string => {
    if (score <= 3) return "Erste Idee";
    if (score <= 6) return "Konkrete Richtung";
    if (score <= 8) return "Gut vorbereitet";
    return "Startklar";
  };

  const getReifegradColor = (score: number): string => {
    if (score <= 3) return "#94a3b8";
    if (score <= 6) return "#f59e0b";
    if (score <= 8) return "#3b82f6";
    return "#10b981";
  };

  const getReifegradBg = (score: number): string => {
    if (score <= 3) return "#f1f5f9";
    if (score <= 6) return "#fffbeb";
    if (score <= 8) return "#eff6ff";
    return "#ecfdf5";
  };

  const getReifegradBorder = (score: number): string => {
    if (score <= 3) return "#cbd5e1";
    if (score <= 6) return "#fde68a";
    if (score <= 8) return "#bfdbfe";
    return "#a7f3d0";
  };

  const reifegradLabel = getReifegradLabel(reifegradScore);
  const reifegradColor = getReifegradColor(reifegradScore);
  const reifegradBg = getReifegradBg(reifegradScore);
  const reifegradBorder = getReifegradBorder(reifegradScore);

  const gueltigBis = new Intl.DateTimeFormat("de-DE", {
    year: "numeric", month: "2-digit", day: "2-digit",
  }).format(new Date(anfrage.gueltigBis));

  const createdAt = new Intl.DateTimeFormat("de-DE", {
    year: "numeric", month: "long", day: "numeric",
  }).format(new Date(anfrage.createdAt));

  const formatMonth = (d?: Date | null): string => {
    if (!d) return "";
    return new Intl.DateTimeFormat("de-DE", { month: "long", year: "numeric" }).format(new Date(d));
  };

  const formatDay = (d?: Date | null): string => {
    if (!d) return "";
    return new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "long", year: "numeric" }).format(new Date(d));
  };

  // ── Klärungs-Checkliste (abgeleitet aus DB-Feldern) ──
  const klaerung: { titel: string; erfuellt: boolean }[] = [
    { titel: "Ansprechpartner vorhanden",          erfuellt: !!anfrage.ansprechpartner },
    { titel: "Suchziel definiert",                 erfuellt: !!anfrage.ziel },
    { titel: "Zielregion definiert",               erfuellt: !!anfrage.standort },
    { titel: "Kommunikationssprachen geklärt",     erfuellt: (anfrage.sprachen?.length || 0) > 0 },
    { titel: "Zeitfenster abgestimmt",             erfuellt: !!anfrage.projektEndDatum || !!anfrage.gueltigBis },
    { titel: "Motivation beschrieben",             erfuellt: !!anfrage.motivation },
    { titel: "Erwartungen an Partner beschrieben", erfuellt: (anfrage.partnerErwartungen?.length || 0) > 0 || !!anfrage.mustHaves },
    { titel: "Erstgespräch grundsätzlich erwünscht", erfuellt: !!anfrage.erstgespraechFristDatum },
    { titel: "Vorbereitung dokumentiert",          erfuellt: !!anfrage.vorbereitung },
  ];
  const klaerungErfuellt = klaerung.filter(k => k.erfuellt).length;

  const vorbereitung = anfrage.vorbereitung as Vorbereitung | null;
  const vorbereitungsLabel: Record<keyof Vorbereitung, string> = {
    produktunterlagen: "Produktunterlagen",
    preislisten: "Preislisten",
    zertifikate: "Zertifikate",
    produktproben: "Produktproben",
    marketingmaterial: "Marketingmaterial",
    referenzen: "Referenzen",
    webseiteDeutsch: "Deutsche Website",
    notiz: "",
  };

  const titel = anfrage.sichtbarkeit === "anonym" ? "Anonyme Anfrage" : anfrage.firmenname;

  return (
    <>
      <Nav />

      <div className={styles.container}>
        <div className={styles.back}>
          <Link href="/marktplatz">← Zurück zum Marktplatz</Link>
        </div>

        <div className={styles.grid}>
          <div className={styles.main}>
            {/* Header */}
            <div className={styles.header}>
              <div>
                <div className={styles.badge}>
                  <span className={styles.statusDot} style={{ background: reifegradColor }} />
                  <span>{reifegradScore}/10 — {reifegradLabel}</span>
                </div>
                <h1 className={styles.title}>{titel}</h1>
                <p className={styles.subtitle}>
                  {getRichtungDisplay(anfrage.richtung)} • {anfrage.branche.name}
                </p>
                {anfrage.ziel && (
                  <p style={{ marginTop: "12px", fontSize: "18px", color: "#0a3d2e", fontWeight: 500, lineHeight: 1.4 }}>
                    {anfrage.ziel}
                  </p>
                )}
              </div>
              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Art</span>
                  <span className={styles.metaValue}>{anfrage.art}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Gültig bis</span>
                  <span className={styles.metaValue}>{gueltigBis}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Standort</span>
                  <span className={styles.metaValue}>{anfrage.standort}</span>
                </div>
              </div>
            </div>

            {/* Reifegrad / Konkretisierungsgrad */}
            <section className={styles.section} style={{ background: reifegradBg, border: `1px solid ${reifegradBorder}`, borderRadius: "12px", padding: "24px 28px" }}>
              <h2 style={{ color: "#0a3d2e", marginBottom: "6px", fontSize: "18px" }}>Wie konkret ist das Vorhaben?</h2>
              <p style={{ fontSize: "12px", color: "#888", marginBottom: "16px", fontStyle: "italic" }}>Einschätzung des suchenden Unternehmens</p>

              {/* Score + Label */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                <span style={{ fontSize: "36px", fontWeight: 800, color: reifegradColor, lineHeight: 1 }}>
                  {reifegradScore}
                </span>
                <span style={{ fontSize: "14px", color: "#555" }}>von 10</span>
                <span style={{ padding: "5px 14px", backgroundColor: reifegradColor, color: "white", borderRadius: "20px", fontSize: "13px", fontWeight: 700, marginLeft: "4px" }}>
                  {reifegradLabel}
                </span>
              </div>

              {/* Grafische Darstellung: Horizontaler Balken 1-10 */}
              <div style={{ display: "flex", gap: "4px", marginBottom: "12px" }}>
                {Array.from({ length: 10 }, (_, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: "10px",
                      borderRadius: i === 0 ? "5px 0 0 5px" : i === 9 ? "0 5px 5px 0" : "0",
                      backgroundColor: i < reifegradScore ? reifegradColor : "#e2e8f0",
                      transition: "background-color 0.3s",
                    }}
                  />
                ))}
              </div>

              {/* Skala-Beschriftung */}
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#888", marginBottom: anfrage.reifegradBeschreibung ? "16px" : "0" }}>
                <span>Erste Idee</span>
                <span>Konkrete Richtung</span>
                <span>Gut vorbereitet</span>
                <span>Startklar</span>
              </div>

              {/* Optionale Beschreibung */}
              {anfrage.reifegradBeschreibung && (
                <div style={{ padding: "12px 16px", backgroundColor: "rgba(255,255,255,0.7)", borderRadius: "8px", fontSize: "14px", color: "#333", lineHeight: 1.6 }}>
                  {anfrage.reifegradBeschreibung}
                </div>
              )}
            </section>

            {/* 1. Was wird gesucht? */}
            <section className={styles.section}>
              <h2>Was wird gesucht?</h2>
              <p className={styles.content}>{anfrage.beschreibung}</p>
            </section>

            {/* 2. Von Easy-B2B geklärt */}
            <section className={styles.section} style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "24px 28px" }}>
              <h2 style={{ color: "#0a3d2e", marginBottom: "6px" }}>✓ Von Easy-B2B geklärt</h2>
              <p style={{ fontSize: "12px", color: "#666", marginBottom: "12px", fontStyle: "italic" }}>Diese Angaben wurden im Rahmen der Anfrage mit dem Unternehmen besprochen.</p>
              <p style={{ fontSize: "14px", color: "#15803d", marginBottom: "16px", fontWeight: 500 }}>
                {klaerungErfuellt} von {klaerung.length} Punkten geklärt — das spart Ihnen Zeit beim Erstkontakt.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "10px" }}>
                {klaerung.map((p, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: p.erfuellt ? "#15803d" : "#999" }}>
                    <span style={{ width: "18px", height: "18px", borderRadius: "50%", backgroundColor: p.erfuellt ? "#16a34a" : "transparent", border: p.erfuellt ? "none" : "2px solid #ccc", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, flexShrink: 0 }}>{p.erfuellt ? "✓" : ""}</span>
                    <span>{p.titel}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Warum dieses Projekt gestartet wurde */}
            {anfrage.motivation && (
              <section className={styles.section}>
                <h2>Warum dieses Projekt gestartet wurde</h2>
                <p className={styles.content}>{anfrage.motivation}</p>
              </section>
            )}

            {/* 4. Was ein gutes Ergebnis wäre */}
            {anfrage.ziele && anfrage.ziele.length > 0 && (
              <section className={styles.section}>
                <h2>Was ein gutes Ergebnis wäre</h2>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {anfrage.ziele.map((z: string, i: number) => (
                    <li key={i} style={{ display: "flex", gap: "12px", padding: "8px 0", fontSize: "15px", color: "#333", lineHeight: 1.6 }}>
                      <span style={{ color: "#e8a020", fontWeight: 700, flexShrink: 0, fontSize: "18px" }}>→</span>
                      <span>{z}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 5. Aktuelles Zeitfenster */}
            {(anfrage.projektStartDatum || anfrage.projektEndDatum || anfrage.erstgespraechFristDatum) && (
              <section className={styles.section}>
                <h2>Aktuelles Zeitfenster</h2>
                {(anfrage.projektStartDatum || anfrage.projektEndDatum) && (
                  <p className={styles.content} style={{ marginBottom: "8px" }}>
                    📅 <strong>Aktive Suche:</strong> {formatMonth(anfrage.projektStartDatum)}
                    {anfrage.projektEndDatum && ` – ${formatMonth(anfrage.projektEndDatum)}`}
                  </p>
                )}
                {anfrage.erstgespraechFristDatum && (
                  <p className={styles.content}>
                    💬 <strong>Erste Gespräche gewünscht bis:</strong> {formatDay(anfrage.erstgespraechFristDatum)}
                  </p>
                )}
              </section>
            )}

            {/* 6. Was wir uns von einem Partner wünschen */}
            {anfrage.partnerErwartungen && anfrage.partnerErwartungen.length > 0 && (
              <section className={styles.section}>
                <h2>Was wir uns von einem Partner wünschen</h2>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {anfrage.partnerErwartungen.map((e: string, i: number) => (
                    <li key={i} style={{ display: "flex", gap: "12px", padding: "8px 0", fontSize: "15px", color: "#333", lineHeight: 1.6 }}>
                      <span style={{ color: "#0a3d2e", fontWeight: 700, flexShrink: 0 }}>●</span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 7. Was bereits vorhanden ist */}
            {vorbereitung && (
              <section className={styles.section}>
                <h2>Was bereits vorhanden ist</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px", marginBottom: vorbereitung.notiz ? "16px" : 0 }}>
                  {(Object.keys(vorbereitungsLabel) as (keyof Vorbereitung)[])
                    .filter(k => k !== "notiz")
                    .map(k => {
                      const erfuellt = !!vorbereitung[k];
                      return (
                        <div key={k} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: erfuellt ? "#0a3d2e" : "#999" }}>
                          <span style={{ width: "16px", fontSize: "16px", flexShrink: 0 }}>{erfuellt ? "✓" : "○"}</span>
                          <span>{vorbereitungsLabel[k]}</span>
                        </div>
                      );
                    })}
                </div>
                {vorbereitung.notiz && (
                  <div style={{ padding: "12px 16px", backgroundColor: "#fef3c7", borderRadius: "8px", fontSize: "14px", color: "#78350f", fontStyle: "italic" }}>
                    💡 {vorbereitung.notiz}
                  </div>
                )}
              </section>
            )}

            {/* 8. Für wen besonders interessant */}
            {anfrage.zielgruppe && anfrage.zielgruppe.length > 0 && (
              <section className={styles.section}>
                <h2>Für wen dieses Projekt besonders interessant ist</h2>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {anfrage.zielgruppe.map((z: string, i: number) => (
                    <span key={i} style={{ padding: "8px 16px", backgroundColor: "#e3f2fd", color: "#0d47a1", borderRadius: "24px", fontSize: "14px", fontWeight: 600 }}>
                      🏷 {z}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Must-Haves / Nice-to-Haves (Legacy — wenn vorhanden) */}
            {anfrage.mustHaves && (
              <section className={styles.section}>
                <h2>Must-Haves</h2>
                <p className={styles.content}>{anfrage.mustHaves}</p>
              </section>
            )}
            {anfrage.niceToHaves && (
              <section className={styles.section}>
                <h2>Nice-to-Haves</h2>
                <p className={styles.content}>{anfrage.niceToHaves}</p>
              </section>
            )}

            {/* 11. Bevor Sie Ihr Interesse bekunden */}
            <section className={styles.section} style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "12px", padding: "24px 28px" }}>
              <h2 style={{ color: "#1e3a8a", marginBottom: "12px" }}>Bevor Sie Ihr Interesse bekunden</h2>
              <p style={{ fontSize: "14px", color: "#1e40af", marginBottom: "14px", fontWeight: 500 }}>
                Folgende Informationen werden im Anschluss abgefragt — wir empfehlen, diese vor dem Klick kurz zu überlegen:
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {[
                  "Warum passt Ihr Unternehmen zu diesem Projekt?",
                  "Welche Erfahrung bringen Sie mit?",
                  "Welche Regionen decken Sie ab?",
                  "Welche Kontakte oder Netzwerke sind vorhanden?",
                ].map((f, i) => (
                  <li key={i} style={{ display: "flex", gap: "12px", padding: "6px 0", fontSize: "14px", color: "#1e3a8a" }}>
                    <span style={{ flexShrink: 0 }}>→</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* CTA */}
            <div className={styles.ctaBlock}>
              <h3>Passt das zu Ihrem Unternehmen?</h3>
              <p>
                Wenn Sie denken, dass Sie ein guter Match sind, teilen Sie Ihr
                Interesse — und wir schauen gemeinsam, ob es funktioniert.
              </p>
              <Link href={`/interesse/${anfrage.anzeigenId}`} className="btn-primary">
                Interesse bekunden →
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Anfrage-Info</h3>
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Anfrage-Nr.</span>
                  <span className={styles.infoValue}>{anfrage.anzeigenId}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Branche</span>
                  <span className={styles.infoValue}>{anfrage.branche.name}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Reifegrad</span>
                  <span className={styles.infoValue} style={{ color: reifegradColor, fontWeight: 700 }}>{reifegradScore}/10 · {reifegradLabel}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Eingegangen</span>
                  <span className={styles.infoValue}>{createdAt}</span>
                </div>
              </div>
            </div>

            <div className={styles.card} style={{ background: "#0a3d2e", color: "white" }}>
              <h3 className={styles.cardTitle} style={{ color: "white" }}>Interesse bekunden</h3>
              <p className={styles.cardText} style={{ color: "rgba(255,255,255,0.85)" }}>
                Erzählen Sie uns kurz, warum Sie ein gutes Match sind — wir
                kümmern uns um den Kontakt.
              </p>
              <Link href={`/interesse/${anfrage.anzeigenId}`} className="btn-primary">
                Weiter →
              </Link>
            </div>

            {anfrage.sichtbarkeit === "anonym" && (
              <div className={styles.card} style={{ background: "#f0f7ff" }}>
                <h3 className={styles.cardTitle}>🔒 Anonyme Anfrage</h3>
                <p className={styles.cardText}>
                  Diese Anfrage wurde anonym eingereicht. Sie können Interesse
                  bekunden, ohne den Namen der Firma zu kennen.
                </p>
              </div>
            )}

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Weitere Anfragen</h3>
              <p className={styles.cardText}>
                Entdecken Sie weitere interessante Anfragen im Marktplatz.
              </p>
              <Link href="/marktplatz" className="btn-outline">
                Marktplatz →
              </Link>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </>
  );
}
