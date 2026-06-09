import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import styles from './page.module.css'

export const metadata = {
  title: 'Warum Easy-B2B? Hintergrund & Preise – Easy-B2B',
  description: 'Warum gibt es Easy-B2B, wer steht dahinter und was kostet es? Ehrliche Antworten ohne Verkaufsdruck.',
}

export default function WarumWirPage() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Hintergrund</p>
          <h1>Warum gibt es Easy-B2B?</h1>
          <p className={styles.heroSub}>
            Ehrliche Antworten auf berechtigte Fragen &mdash; ohne Verkaufsdruck, ohne Marketing-Sprache.
          </p>
        </div>
      </section>

      {/* ── DIE IDEE ── */}
      <section className={`${styles.section} ${styles.sectionWarm}`}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>Die Idee</p>
          <h2 className={styles.sectionHeading}>
            Menschen zusammenbringen, die sich sonst nie getroffen h&auml;tten
          </h2>

          <p className={styles.prose}>
            Viele Unternehmen auf beiden Seiten der deutsch-d&auml;nischen Grenze haben gute Produkte,
            echtes Know-how und konkretes Interesse an Zusammenarbeit. Trotzdem passiert oft nichts &mdash;
            weil der erste Kontakt fehlt.
          </p>

          <p className={styles.prose}>
            Wen ruft man an? Wer kennt den Markt? Wer kann einsch&auml;tzen, ob eine Idee
            realistisch ist? Genau an diesem Punkt scheitern viele Vorhaben &mdash;
            nicht an der Idee selbst, sondern an der T&uuml;r, die niemand &ouml;ffnet.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Easy-B2B wurde gegr&uuml;ndet, um genau diese T&uuml;r zu &ouml;ffnen:
              pers&ouml;nlich, kuratiert, mit Verst&auml;ndnis f&uuml;r beide Kulturen.
            </p>
          </div>

          <p className={styles.prose}>
            Kein Algorithmus entscheidet, wer zu wem passt. Stattdessen h&ouml;ren wir zu,
            stellen Fragen und bringen Menschen zusammen, bei denen wir glauben,
            dass ein gutes Gespr&auml;ch entstehen kann.
          </p>

          <p className={styles.prose}>
            Das ist kein Technologie-Startup. Das ist eine &Uuml;berzeugung:
            Gute Gesch&auml;ftsbeziehungen beginnen mit echten Gespr&auml;chen &mdash;
            nicht mit Datenbanken.
          </p>
        </div>
      </section>

      {/* ── WER STEHT DAHINTER? ── */}
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>Hintergrund</p>
          <h2 className={styles.sectionHeading}>Wer steht hinter Easy-B2B?</h2>

          <p className={styles.prose}>
            Easy-B2B ist ein Projekt von <strong>Etablering Tyskland</strong> &mdash; einem Service,
            der d&auml;nische Unternehmen beim Markteintritt in Deutschland begleitet.
          </p>

          <p className={styles.prose}>
            Gegr&uuml;ndet von Jan Thomsen, der in D&auml;nemark aufgewachsen ist und seit vielen
            Jahren in Deutschland lebt. Jemand, der beide Kulturen kennt und wei&szlig;,
            wie unterschiedlich Gesch&auml;ft auf beiden Seiten der Grenze funktioniert.
          </p>

          <p className={styles.prose}>
            Mit Easy-B2B geht Etablering Tyskland bewusst in Vorleistung: Wir bauen Kontakte auf,
            betreiben den Marktplatz und investieren Zeit in jede einzelne Anfrage &mdash;
            ohne daf&uuml;r sofort eine Gegenleistung zu erwarten.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Die Hoffnung dahinter ist einfach: Wenn Unternehmen positive Erfahrungen mit Easy-B2B machen
              und sp&auml;ter Unterst&uuml;tzung brauchen &mdash; beim Markteintritt, bei der Gr&uuml;ndung,
              bei Steuerfragen &mdash; dann erinnern sie sich an uns.
            </p>
          </div>

          <p className={styles.prose}>
            Das ist kein verstecktes Gesch&auml;ftsmodell. Das ist einfach der Gedanke:
            Wer hilfreich ist, wird weiterempfohlen.
          </p>

          <div className={styles.etCard}>
            <p className={styles.etLabel}>Ein Projekt von</p>
            <h3 className={styles.etName}>Etablering Tyskland</h3>
            <p className={styles.etDesc}>
              Begleitung f&uuml;r d&auml;nische Unternehmen beim Markteintritt in Deutschland.
            </p>
            <div className={styles.etServices}>
              <span className={styles.etChip}>Unternehmensgr&uuml;ndung</span>
              <span className={styles.etChip}>Markteintritt</span>
              <span className={styles.etChip}>Buchhaltung</span>
              <span className={styles.etChip}>Steuern</span>
              <span className={styles.etChip}>Administration</span>
            </div>
            <a
              href="https://etablering-tyskland.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.etLink}
            >
              Zur Website von Etablering Tyskland &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ── PREISE ── */}
      <section className={`${styles.section} ${styles.sectionWarm}`}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>Preise</p>
          <h2 className={styles.sectionHeading}>Was kostet Easy-B2B?</h2>

          <p className={styles.prose}>
            Eine berechtigte Frage &mdash; und eine ehrliche Antwort:
          </p>

          <div className={styles.pricingCard}>
            <div className={styles.pricingBadge}>
              <span>&#10003;</span>
              Aktueller Stand
            </div>
            <h3 className={styles.pricingTitle}>Derzeit kostenfrei</h3>
            <p className={styles.pricingDesc}>
              Easy-B2B befindet sich im Aufbau. Wir m&ouml;chten zun&auml;chst lernen, welche Funktionen
              wirklich helfen und welche Prozesse verbessert werden m&uuml;ssen. Deshalb verzichten wir
              aktuell auf eine Preisstruktur.
            </p>
            <div className={styles.pricingPoints}>
              <div className={styles.pricingPoint}>
                <span className={styles.pricingCheck}>&#10003;</span>
                <span>Anfragen einreichen und ver&ouml;ffentlichen</span>
              </div>
              <div className={styles.pricingPoint}>
                <span className={styles.pricingCheck}>&#10003;</span>
                <span>Pers&ouml;nliche Pr&uuml;fung und Kl&auml;rung jeder Anfrage</span>
              </div>
              <div className={styles.pricingPoint}>
                <span className={styles.pricingCheck}>&#10003;</span>
                <span>Gezielte Kontaktsuche &uuml;ber verschiedene Wege</span>
              </div>
              <div className={styles.pricingPoint}>
                <span className={styles.pricingCheck}>&#10003;</span>
                <span>Match-Vorschl&auml;ge und begleiteter Erstkontakt</span>
              </div>
              <div className={styles.pricingPoint}>
                <span className={styles.pricingCheck}>&#10003;</span>
                <span>Zugang zum Marktplatz mit gepr&uuml;ften Gesuchen</span>
              </div>
            </div>
            <p className={styles.pricingNote}>
              Sp&auml;ter k&ouml;nnen einzelne Zusatzangebote kostenpflichtig werden &mdash;
              zum Beispiel besondere Veranstaltungsformate oder erweiterte Begleitung.
              Der grundlegende Service bleibt zug&auml;nglich.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>Bereit f&uuml;r den ersten Schritt?</h2>
          <p>
            Ob Sie einen Partner suchen oder einfach nur neugierig sind &mdash;
            wir freuen uns &uuml;ber jede Anfrage.
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/anfrage-einreichen" className="btn-amber">
              Gesuch einreichen &rarr;
            </Link>
            <Link href="/kontakt" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
              Erst mal sprechen
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
