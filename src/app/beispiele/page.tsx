import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import { BEISPIELE, USE_CASES, GRENZSITUATIONEN, SITE } from '@/lib/content'
import styles from './page.module.css'

export const metadata = {
  title: 'Beispiele & Use Cases – Easy-B2B',
  description: 'Echte Verbindungen aus dem Netzwerk. Kooperationsbeispiele, Use Cases und kulturelle Grenzsituationen.',
}

export default function Beispiele() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <div className={styles.hero}>
        <p className="eyebrow eyebrow-amber">Aus dem Netzwerk</p>
        <h1>Echte Verbindungen.<br /><em>Echte Geschichten.</em></h1>
        <p>Jedes dieser Beispiele begann mit einem Gesuch. Keines davon hätte ein Algorithmus gefunden.</p>
        <div className={styles.heroPills}>
          <span className={styles.pill}>🇩🇰 → 🇩🇪 Dänen in Deutschland</span>
          <span className={styles.pill}>🇩🇪 → 🇩🇰 Deutsche in Dänemark</span>
        </div>
      </div>

      {/* ── KOOPERATIONEN ── */}
      <section className={`sec sec-white ${styles.section}`}>
        <p className="eyebrow">Reale Kooperationen</p>
        <h2>Was aus diesem Netzwerk entstanden ist.</h2>
        <p className="sec-intro">
          Jedes Beispiel begann mit einem Gesuch – und endete mit einer Verbindung die kein Algorithmus gefunden hätte.
        </p>
        <div className={styles.storyGrid}>
          {BEISPIELE.map((b) => (
            <div key={b.titel} className={styles.storyCard}>
              <div className={styles.storyHeader}>
                <span className={styles.storyEmoji}>{b.icon}</span>
                <div>
                  <div className={styles.storyDir}>{b.richtung}</div>
                  <div className={styles.storyTitle}>{b.titel}</div>
                </div>
              </div>
              <div className={styles.storyBody}>
                <p className={styles.storySituation}>{b.situation}</p>
                <div className={styles.storyResult}>
                  <strong>Ergebnis</strong>
                  {b.ergebnis}
                </div>
                <div className={styles.storyTags}>
                  {b.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className={`sec sec-off ${styles.section}`}>
        <p className="eyebrow">Use Cases</p>
        <h2>Was hier möglich ist.</h2>
        <p className="sec-intro">
          Nicht jede Kooperation sieht gleich aus. Hier sind die häufigsten Formen – und was dahintersteckt.
        </p>
        <div className={styles.ucGrid}>
          {USE_CASES.map((u) => (
            <div key={u.title} className={styles.ucCard}>
              <span className={styles.ucIcon}>{u.icon}</span>
              <div className={styles.ucTitle}>{u.title}</div>
              <p className={styles.ucDesc}>{u.desc}</p>
              <em className={styles.ucExample}>→ {u.beispiel}</em>
            </div>
          ))}
        </div>
      </section>

      {/* ── GRENZSITUATIONEN ── */}
      <section className={`sec sec-white ${styles.section}`}>
        <div className={styles.grenzIntro}>
          <div className={styles.grenzIntroText}>
            <p className="eyebrow">Kulturelle Unterschiede</p>
            <h2>Kennst du das?</h2>
            <p className="sec-intro">
              Wer über die Grenze arbeitet, kennt diese Momente. Nicht dramatisch –
              aber manchmal entscheidend. Hier sind die häufigsten Situationen
              aus dem deutsch-dänischen Geschäftsleben.
            </p>
          </div>
          <div className={styles.grenzIntroImg}>
            <Image
              src="/images/grenz-dosentelefon.png"
              alt="Kommunikation über die Grenze – Lars und Markus"
              width={440}
              height={330}
            />
          </div>
        </div>
        <div className={styles.grenzGrid}>
          {GRENZSITUATIONEN.map((g) => (
            <div key={g.titel} className={styles.gc}>
              <div className={styles.gcHead}>
                <span className={styles.gcTitle}>{g.titel}</span>
                <span>🇩🇪🇩🇰</span>
              </div>
              <div className={styles.gcBody}>
                <div className={styles.gcSide}>
                  <span className={styles.gcFlag}>🇩🇪</span>
                  <span>{g.de}</span>
                </div>
                <div className={styles.gcSide}>
                  <span className={styles.gcFlag}>🇩🇰</span>
                  <span>{g.dk}</span>
                </div>
                <div className={styles.gcDivider} />
                <div className={styles.gcErkenntnis}>
                  <div className={styles.gcIcon}>!</div>
                  <div className={styles.gcText}>
                    <strong>Erkenntnis:</strong> {g.erkenntnis}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={`sec sec-navy ${styles.section}`} style={{ textAlign: 'center' }}>
        <div className={styles.quoteBlock}>
          <p className={styles.quoteText}>„{SITE.kernsatz}"</p>
          <p className={styles.quoteWho}>Jan Thomsen · Gründer Easy-B2B</p>
        </div>
        <p className="eyebrow eyebrow-amber" style={{ marginTop: 40, marginBottom: 12 }}>Bereit?</p>
        <h2>Dein Gesuch ins Netzwerk.</h2>
        <p className="sec-intro" style={{ margin: '0 auto 28px' }}>
          Wenn du dich in einem der Beispiele wiedererkennst – dann ist Easy-B2B der richtige Ort.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/marktplatz#einreichen" className="btn-amber">Gesuch einreichen →</Link>
          <Link href="/marktplatz" className="btn-outline" style={{ color: '#e8f0f8', borderColor: 'rgba(255,255,255,.2)' }}>
            Aktuelle Gesuche ansehen
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
