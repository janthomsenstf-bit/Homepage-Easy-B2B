import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";
import InteresseForm from "@/components/InteresseForm";
import styles from "./page.module.css";

interface InteressePageProps {
  params: {
    id: string;
  };
}

export default async function InteressePage({ params }: InteressePageProps) {
  const anfrage = await prisma.anfrage.findFirst({
    where: {
      OR: [
        { id: params.id },
        { anzeigenId: params.id },
      ],
    },
    include: { branche: true },
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

  return (
    <>
      <Nav />

      <div className={styles.container}>
        <div className={styles.back}>
          <Link href={`/anzeige/${anfrage.anzeigenId}`}>← Zurück zur Anfrage</Link>
        </div>

        <div className={styles.grid}>
          {/* Info Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Anfrage</h3>
              {anfrage.sichtbarkeit === "oeffentlich" && (
                <p className={styles.firmaName}>{anfrage.firmenname}</p>
              )}
              {anfrage.sichtbarkeit === "anonym" && (
                <p className={styles.firmaName}>Anonym</p>
              )}
              <p className={styles.branche}>{anfrage.branche.name}</p>
              <p className={styles.richtung}>
                {getRichtungDisplay(anfrage.richtung)}
              </p>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Wie funktioniert es?</h3>
              <ol className={styles.stepList}>
                <li>Du füllst dieses Formular aus</li>
                <li>Wir prüfen dein Unternehmen</li>
                <li>Wir stellen euch vor</li>
                <li>Ihr einigt euch selbst</li>
              </ol>
            </div>

            <div className={styles.card} style={{ background: "#f0f7ff" }}>
              <h3 className={styles.cardTitle}>💡 Tipp</h3>
              <p className={styles.cardText}>
                Je ausführlicher deine Antworten, desto besser können wir einschätzen,
                ob ihr zusammenpasst.
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className={styles.formSection}>
            <div className={styles.formHeader}>
              <h1>Interesse bekunden</h1>
              <p>
                Erzähl uns, warum dein Unternehmen gut zu dieser Anfrage passt.
              </p>
            </div>

            <InteresseForm anfrageId={anfrage.id} anzeigenId={anfrage.anzeigenId} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
