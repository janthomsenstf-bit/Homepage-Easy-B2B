import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import {
  TEASER_KARTEN, BEISPIELE, PROZESS,
  WERTE, REIFEGRAD, SITE
} from '@/lib/content'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Nav />

      {/* ── 1. HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <div className={styles.pill}>🇩🇰 · 🇩🇪 &nbsp; Dänemark trifft Deutschland</div>
            <h1>
              Wir verbinden Unternehmer –<br />
              und die <em>Menschen dahinter.</em>
            </h1>
            <p className={styles.heroSub}>
              Ein kuratiertes Netzwerk für deutsche und dänische Unternehmen.
              Persönlich begleitet. Nicht automatisiert.
            </p>
            <div className={styles.heroBtns}>
              <Link href="/marktplatz#einreichen" className="btn-primary">
                Gesuch einreichen
              </Link>
              <Link href="/marktplatz" className="btn-outline">
                Gesuche ansehen
              </Link>
            </div>
            <p className={styles.heroNote}>
              Kein Algorithmus <span>·</span> Kein anonymes Portal <span>·</span> Persönlich begleitet
            </p>
          </div>
          <div className={styles.heroImg}>
            <Image
              src="/images/hero-dosentelefon.png"
              alt="Lars und Markus kommunizieren per Dosentelefon – DK trifft DE"
              width={460}
              height={340}
              priority
            />
          </div>
        </div>
      </section>

      {/* ── 2. WAS MACHEN WIR ── */}
      <section className={`sec sec-white ${styles.section}`}>
        <p className="eyebrow">Was wir machen</p>
        <h2>Kooperationen über die Grenze.</h2>
        <p className="sec-intro">
          Wir bringen deutsche und dänische Unternehmen zusammen – für Vertrieb,
          Ausschreibungen, Pilotprojekte und alles dazwischen.
        </p>
        <div className={styles.tGrid}>
          {TEASER_KARTEN.map((k) => (
            <div key={k.title} className={styles.tCard}>
              <span className={styles.tIcon}>{k.icon}</span>
              <div className={styles.tTitle}>{k.title}</div>
              <div className={styles.tDesc}>{k.desc}</div>
            </div>
          ))}
        </div>
        <Link href="/beispiele" className="more">Alle Use Cases ansehen →</Link>
      </section>

      {/* ── 3. BEISPIELE ANTEASER ── */}
      <section className={`sec sec-off ${styles.section}`}>
        <p className="eyebrow">Aus dem Netzwerk</p>
        <h2>Echte Verbindungen.</h2>
        <p className="sec-intro">
          Drei Momente aus dem Netzwerk – damit du sofort ein Bild bekommst was hier entsteht.
        </p>
        <div className={styles.pGrid}>
          {BEISPIELE.slice(0, 4).map((b) => (
            <div key={b.titel} className={styles.pCard}>
              <div className={styles.pIcon}>{b.icon}</div>
              <div className={styles.pTitle}>{b.titel}</div>
              <div className={styles.pText}>{b.ergebnis}</div>
            </div>
          ))}
        </div>
        <Link href="/beispiele" className="more">Alle Beispiele & Geschichten ansehen →</Link>
      </section>

      {/* ── 4. PROZESS ── */}
      <section className={`sec sec-white ${styles.section}`}>
        <p className="eyebrow">So funktioniert's</p>
        <h2>Fünf Schritte. Persönlich begleitet.</h2>
        <p className="sec-intro">
          Kein Formular ins Nichts. Du weißt immer wo du stehst.
        </p>
        <div className={styles.steps}>
          {PROZESS.map((s) => (
            <div key={s.nr} className={`${styles.step} ${s.highlight ? styles.stepKey : ''}`}>
              <div className={styles.stepNum}>{s.nr}</div>
              <div>
                <div className={styles.stepTitle}>{s.title}</div>
                <div className={styles.stepDesc}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <Link href="/marktplatz" className="more">Aktuelle Gesuche im Netzwerk ansehen →</Link>
      </section>

      {/* ── 5. WER SIND WIR ── */}
      <section className={`sec sec-off ${styles.section}`} id="jan">
        <p className="eyebrow">Wer steckt dahinter</p>
        <h2>Das ist Jan.</h2>
        <div className={styles.janWrap}>
          <div className={styles.janAv}>JT</div>
          <div>
            <div className={styles.janName}>{SITE.jan.name}</div>
            <div className={styles.janRole}>{SITE.jan.role}</div>
            <p className={styles.janBio}>{SITE.jan.bio}</p>
            <a
              href={SITE.jan.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.janLi}
            >
              {SITE.jan.linkedinLabel} →
            </a>
          </div>
        </div>
        <div className={styles.partnerBox} id="partner">
          <div className={styles.partnerIcon}><div className={styles.partnerDot} /></div>
          <div className={styles.partnerText}>
            <div className={styles.partnerTitle}>Du hast ein eigenes Netzwerk?</div>
            <p className={styles.partnerDesc}>
              Handelsvertreter, Vertriebsteams, Branchenexperten – wer dauerhaft Teil
              des Systems werden möchte, führt zuerst ein persönliches Gespräch.
            </p>
          </div>
          <a href="mailto:jan@easy-b2b.de" className="btn-primary">
            Gespräch anfragen
          </a>
        </div>
      </section>

      {/* ── 6. WARUM EASY-B2B ── */}
      <section className={`sec sec-navy ${styles.section}`}>
        <p className="eyebrow eyebrow-amber">Warum Easy-B2B</p>
        <h2>Weil ein schlechtes Match schlimmer ist als keins.</h2>
        <p className="sec-intro">
          Massenmarktplätze vermitteln Kontakte. Wir ermöglichen Begegnungen.
          Der Unterschied liegt in dem was vorher passiert – und wer dabei ist.
        </p>
        <div className={styles.werteGrid}>
          {WERTE.map((w) => (
            <div key={w.title} className={styles.werteCard}>
              <div className={styles.werteTitle}>{w.title}</div>
              <div className={styles.werteText}>{w.text}</div>
            </div>
          ))}
        </div>
        <Link href="/marktplatz#einreichen" className="btn-amber">
          Jetzt mitmachen →
        </Link>
      </section>

      {/* ── 7. REIFEGRAD ── */}
      <section className={`sec sec-off ${styles.section}`}>
        <p className="eyebrow">Wo stehst du?</p>
        <h2>Bist du schon so weit?</h2>
        <p className="sec-intro">
          Eine ehrliche Frage vor dem Start. Dieses Netzwerk ist für Unternehmen die konkret bereit sind.
        </p>
        <div className={styles.rgBar}>
          <div className={styles.rgSeg} style={{ background: '#f09595', flex: 3 }} />
          <div className={styles.rgSeg} style={{ background: '#FAC775', flex: 4 }} />
          <div className={styles.rgSeg} style={{ background: '#5DCAA5', flex: 3 }} />
        </div>
        <div className={styles.rgRows}>
          {REIFEGRAD.map((r) => (
            <div key={r.range} className={styles.rgRow}>
              <div className={styles.rgDot} style={{ background: r.color }} />
              <div>
                <div className={styles.rgLabel}>{r.range} · {r.label}</div>
                <div className={styles.rgText}>{r.desc}</div>
                {r.ctaHref && (
                  <a
                    href={r.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.rgLink}
                  >
                    {r.cta}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.rgCtas}>
          <Link href="/marktplatz#einreichen" className={styles.rgCtaNavy}>
            <div className={styles.rgCtaLabel}>Ich habe etwas anzubieten</div>
            <div className={styles.rgCtaText}>Gesuch einreichen →</div>
          </Link>
          <Link href="/marktplatz" className={styles.rgCtaLight}>
            <div className={styles.rgCtaLabelAmber}>Ich suche einen Partner</div>
            <div className={styles.rgCtaText2}>Gesuche ansehen →</div>
          </Link>
        </div>
      </section>

      {/* ── 8. NEWSLETTER ── */}
      <section className={`sec sec-dark ${styles.section}`}>
        <p className="eyebrow eyebrow-amber">Informiert bleiben</p>
        <h2>Neue Gesuche in dein Postfach.</h2>
        <p className="sec-intro">
          Du wählst deine Branchen – wir schicken einen Teaser wenn etwas Passendes erscheint.
        </p>
        <div className={styles.nlForm}>
          <div className={styles.nlField}>
            <label className={styles.nlLabel}>Deine E-Mail</label>
            <input className={styles.nlInput} type="email" placeholder="du@firma.de" />
          </div>
          <div className={`${styles.nlField} ${styles.nlFieldSmall}`}>
            <label className={styles.nlLabel}>Häufigkeit</label>
            <select className={styles.nlInput}>
              <option>Sofort-Alert</option>
              <option>Wöchentlicher Digest</option>
            </select>
          </div>
          <button className="btn-amber" style={{ alignSelf: 'flex-end' }}>
            Anmelden
          </button>
        </div>
        <p className={styles.nlNote}>
          DSGVO-konform · Jederzeit abmeldbar · Ein Alert ist kein Zugang.
        </p>
      </section>

      <Footer />
    </>
  )
}
