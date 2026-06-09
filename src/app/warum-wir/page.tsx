import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import styles from './page.module.css'

export const metadata = {
  title: 'Warum Easy-B2B? Hintergrund & Preise – Easy-B2B',
  description: 'Warum gibt es Easy-B2B, wer steht dahinter und was kostet es?',
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
            Eine Frage, die uns immer wieder gestellt wird.
          </p>
        </div>
      </section>

      {/* ── DIE IDEE ── */}
      <section className={`${styles.section} ${styles.sectionWarm}`}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>Die Idee</p>
          <h2 className={styles.sectionHeading}>
            Manchmal fehlt nur der erste Kontakt
          </h2>

          <p className={styles.prose}>
            Wir sehen regelm&auml;&szlig;ig Unternehmen auf beiden Seiten der deutsch-d&auml;nischen Grenze,
            die eigentlich gut zueinander passen w&uuml;rden. Gute Produkte, echtes Interesse
            an Zusammenarbeit &mdash; aber keinen Kontakt zueinander.
          </p>

          <p className={styles.prose}>
            Wen ruft man an, wenn man den Markt auf der anderen Seite nicht kennt?
            Wer kann einsch&auml;tzen, ob eine Idee dort funktioniert?
            An diesem Punkt bleiben viele Vorhaben einfach stecken.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Easy-B2B soll dabei helfen, diesen ersten Schritt einfacher zu machen.
              Nicht automatisiert, nicht &uuml;ber eine anonyme Plattform &mdash; sondern pers&ouml;nlich.
            </p>
          </div>

          <p className={styles.prose}>
            Wir h&ouml;ren zu, stellen Fragen und schauen, ob wir jemanden kennen oder
            finden k&ouml;nnen, der passen k&ouml;nnte. Manchmal klappt das schnell,
            manchmal dauert es. Aber wenn es passt, freut uns das.
          </p>
        </div>
      </section>

      {/* ── WER STEHT DAHINTER? ── */}
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>Hintergrund</p>
          <h2 className={styles.sectionHeading}>Wer steht hinter Easy-B2B?</h2>

          <p className={styles.prose}>
            Hinter Easy-B2B steht Jan Thomsen. Er lebt in Deutschland und arbeitet seit vielen
            Jahren mit deutschen und d&auml;nischen Unternehmen. Grenz&uuml;berschreitende Themen
            sind sein Alltag &mdash; er kennt die Unterschiede und Gemeinsamkeiten
            beider Gesch&auml;ftskulturen.
          </p>

          <p className={styles.prose}>
            Easy-B2B ist ein Projekt von <strong>Etablering Tyskland</strong> &mdash; einem Service,
            der d&auml;nische Unternehmen beim Markteintritt in Deutschland begleitet.
            Bei dieser Arbeit f&auml;llt regelm&auml;&szlig;ig auf: Viele Unternehmen suchen
            eigentlich das Gleiche &mdash; einen passenden Kontakt auf der anderen Seite.
            Easy-B2B ist aus genau dieser Beobachtung entstanden.
          </p>

          <p className={styles.prose}>
            Wir helfen gerne. Wenn daraus sp&auml;ter mehr entsteht, umso besser.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Wenn daraus auch eine Zusammenarbeit mit Etablering Tyskland entsteht &mdash;
              zum Beispiel bei Gr&uuml;ndung, Steuerfragen oder Administration &mdash;
              freuen wir uns nat&uuml;rlich. Wenn nicht, ist das v&ouml;llig in Ordnung.
            </p>
          </div>

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
            Kurze Antwort:
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

          <div className={styles.networkHint}>
            <h3 className={styles.networkHintTitle}>Ausblick: Pers&ouml;nliche Netzwerkformate</h3>
            <p className={styles.prose}>
              Neben dem digitalen Marktplatz m&ouml;chten wir langfristig auch pers&ouml;nliche
              Begegnungen erm&ouml;glichen &mdash; zum Beispiel Netzwerkveranstaltungen,
              Unternehmer-Treffen oder Fachformate rund um den deutsch-d&auml;nischen Markt.
            </p>
            <p className={styles.prose}>
              Einige dieser Formate werden voraussichtlich gemeinsam mit Partnern und
              bestehenden Unternehmernetzwerken organisiert. Ob und wie man daran teilnimmt,
              bleibt jedem selbst &uuml;berlassen.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>Haben Sie eine Idee oder ein Vorhaben?</h2>
          <p>
            Ob Sie einen konkreten Partner suchen oder einfach nur eine Frage haben &mdash;
            melden Sie sich gerne.
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
