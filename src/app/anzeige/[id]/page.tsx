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

export default async function AnzeigeDetailPage({
  params,
}: AnzeigeDetailProps) {
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

  if (!anfrage) {
    notFound();
  }

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

  const gueltigBis = new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(anfrage.gueltigBis));

  const createdAt = new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(anfrage.createdAt));

  return (
    <>
      <Nav />

      <div className={styles.container}>
        <div className={styles.back}>
          <Link href="/marktplatz">← Zurück zum Marktplatz</Link>
        </div>

        <div className={styles.grid}>
          <div className={styles.main}>
            <div className={styles.header}>
              <div>
                <div className={styles.badge}>
                  <span
                    className={styles.statusDot}
                    style={{
                      background:
                        reifegrad_colors[anfrage.reifegrad] || "#ccc",
                    }}
                  />
                  <span>{anfrage.reifegrad}</span>
                </div>

                {anfrage.sichtbarkeit === "oeffentlich" && (
                  <h1 className={styles.title}>{anfrage.firmenname}</h1>
                )}

                {anfrage.sichtbarkeit === "anonym" && (
                  <h1 className={styles.title}>Anonyme Anfrage</h1>
                )}

                <p className={styles.subtitle}>
                  {getRichtungDisplay(anfrage.richtung)} • {anfrage.branche.name}
                </p>
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

            <section className={styles.section}>
              <h2>Was wird gesucht?</h2>
              <p className={styles.content}>{anfrage.beschreibung}</p>
            </section>

            {anfrage.ziel && (
              <section className={styles.section}>
                <h2>Ziel & Vision</h2>
                <p className={styles.content}>{anfrage.ziel}</p>
              </section>
            )}

            {anfrage.persönlicherTouch && (
              <section className={styles.section}>
                <h2>Persönlicher Touch</h2>
                <p className={styles.content}>{anfrage.persönlicherTouch}</p>
              </section>
            )}

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

            <div className={styles.ctaBlock}>
              <h3>Passt dein Unternehmen?</h3>
              <p>
                Wenn du denkst, dass du ein guter Match bist, teile dein
                Interesse – und wir schauen gemeinsam, ob es funktioniert.
              </p>
              <Link href={`/interesse/${anfrage.anzeigenId}`} className="btn-primary">
                Interesse bekunden →
              </Link>
            </div>
          </div>

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
                  <span className={styles.infoValue}>{anfrage.reifegrad}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Eingegangen</span>
                  <span className={styles.infoValue}>{createdAt}</span>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Interesse bekunden</h3>
              <p className={styles.cardText}>
                Erzähl uns kurz, warum ihr ein gutes Match seid – und wir
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
                  Diese Anfrage wurde anonym eingereicht. Du kannst Interesse
                  bekunden, ohne den Namen der Firma zu kennen. Das schützt
                  Vertraulichkeit auf beiden Seiten.
                </p>
              </div>
            )}

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Weitere Anfragen</h3>
              <p className={styles.cardText}>
                Entdecke weitere interessante Anfragen im Marktplatz.
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
