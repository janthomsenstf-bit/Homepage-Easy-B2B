import Link from 'next/link'
import AnzeigeCard from '@/components/AnzeigeCard'
import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import { SITE, STATS, DEMO_ANFRAGEN, KOOPERATIONS_TEASER, PROZESS_HOMEPAGE, BEISPIELE_KATEGORIEN, ANFRAGE_DETAILS, BEISPIEL_ANFRAGE, BEISPIEL_INTERESSENTEN } from '@/lib/content'
import styles from './page.module.css'

export const metadata = {
  title: 'EasyB2B – B2B-Matchmaking DE ↔ DK',
  description: 'Konkrete B2B-Anfragen. Echte Unternehmen. Direkte Vermittlung zwischen Deutschland und Dänemark.',
}

export default function Home() {
  // Nur die neuesten 3-4 Anzeigen für Homepage
  const featuredAnzeigen = DEMO_ANFRAGEN.slice(0, 3)

  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <div className={styles.pill}>🇩🇰 · 🇩🇪 Dänemark ↔ Deutschland</div>
            <h1>Dein Partner zwischen Nationen</h1>
            <p className={styles.heroSub}>{SITE.tagline}</p>
            <div className={styles.heroBtns}>
              <Link href="/anfrage-einreichen" className="btn-primary">
                Anfrage einreichen
              </Link>
              <Link href="/marktplatz" className="btn-outline">
                Marktplatz ansehen
              </Link>
            </div>
          </div>
          <div className={styles.heroImg}>
            <div className={styles.heroPlaceholder}>🤝</div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className={styles.statsBar}>
        <div className={styles.statsContainer}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SO FUNKTIONIERT EASYB2B ── */}
      <section className={styles.processSection}>
        <div className={styles.sectionContent}>
          <div className={styles.processHeader}>
            <h2>So funktioniert Easy-B2B</h2>
            <p className={styles.processSubtitle}>Von der ersten Idee zur passenden deutsch-dänischen Kooperation.</p>
          </div>

          <div className={styles.processSteps}>
            {PROZESS_HOMEPAGE.map((step, idx) => (
              <div key={step.nr} className={styles.processStep}>
                <div className={styles.stepNumber}>{step.nr}</div>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
                {idx < PROZESS_HOMEPAGE.length - 1 && <div className={styles.stepArrow}>→</div>}
              </div>
            ))}
          </div>

          <div className={styles.processBadge}>
            <span className={styles.badgeIcon}>✓</span>
            <strong>Wir bringen nicht möglichst viele Kontakte zusammen – sondern die richtigen.</strong>
          </div>

          <div className={styles.typischeGesuche}>
            <h3 className={styles.gesuchwTitle}>Das ist möglich über Easy-B2B:</h3>
            <div className={styles.kategorienGrid}>
              {BEISPIELE_KATEGORIEN.map((kategorie, idx) => (
                <div key={idx} className={styles.kategorieBlock}>
                  <h4 className={styles.kategorieTitle}>{kategorie.kategorie}</h4>
                  <ul className={styles.kategorieList}>
                    {kategorie.beispiele.map((beispiel, bidx) => (
                      <li
                        key={bidx}
                        className={styles.kategorieItem}
                        dangerouslySetInnerHTML={{ __html: beispiel.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                      />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BEISPIEL-STORY: SO KÖNNTE EINE KOOPERATION ENTSTEHEN ── */}
      <section className={styles.storySection}>
        <div className={styles.sectionContent}>
          <div className={styles.storyHeader}>
            <h2>So könnte eine Kooperation entstehen</h2>
            <p className={styles.storySubtitle}>
              Ein beispielhafter Ablauf vom ersten Gesuch bis zur passenden deutsch-dänischen Verbindung.
            </p>
          </div>

          <div className={styles.storyTimeline}>
            {/* SCHRITT 1: Anfrage einreichen */}
            <div className={styles.storyStep}>
              <div className={styles.stepMarker}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepLabel}>Anfrage</div>
              </div>

              <div className={styles.stepContent}>
                <div className={styles.anfrageCard}>
                  <div className={styles.anfrageHeader}>
                    <span className={styles.anfrageFlag}>{BEISPIEL_ANFRAGE.land}</span>
                    <h3>{BEISPIEL_ANFRAGE.unternehmen}</h3>
                  </div>
                  <p className={styles.anfrageBeschreibung}>{BEISPIEL_ANFRAGE.beschreibung}</p>
                  <p className={styles.anfrageGesucht}>
                    <strong>Gesucht:</strong> {BEISPIEL_ANFRAGE.gesucht}
                  </p>
                  <ul className={styles.anfrageDetails}>
                    {BEISPIEL_ANFRAGE.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                  <div className={styles.anfrageHint}>
                    <span>💡</span> Je konkreter die Anfrage, desto besser können passende Kontakte gefunden werden.
                  </div>
                </div>

                <div className={styles.detailsPreview}>
                  <p className={styles.detailsLabel}>Eine Anfrage enthält normalerweise:</p>
                  <div className={styles.detailsGrid}>
                    {ANFRAGE_DETAILS.map((detail, i) => (
                      <div key={i} className={styles.detailTag}>{detail}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* SCHRITT 2: Prüfung */}
            <div className={styles.storyStep}>
              <div className={styles.stepMarker}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepLabel}>Prüfung</div>
              </div>

              <div className={styles.stepContent}>
                <div className={styles.pruefungCard}>
                  <h3>Easy-B2B prüft persönlich</h3>
                  <p>Wir prüfen, ob die Anfrage realistisch, verständlich und sinnvoll aufgebaut ist – und helfen bei Bedarf bei der Optimierung.</p>
                  <div className={styles.pruefungItems}>
                    <div className={styles.pruefungItem}>✓ Plausibilitätscheck</div>
                    <div className={styles.pruefungItem}>✓ Verständnis des deutsch-dänischen Marktes</div>
                    <div className={styles.pruefungItem}>✓ Sprachliche Optimierung</div>
                    <div className={styles.pruefungItem}>✓ Rückfragen bei Bedarf</div>
                  </div>
                  <p className={styles.pruefungNote}>
                    <strong>Wichtig:</strong> Easy-B2B ist keine offene Kontaktbörse. Wir prüfen, nicht nur durchreichen.
                  </p>
                </div>
              </div>
            </div>

            {/* SCHRITT 3: Veröffentlichung */}
            <div className={styles.storyStep}>
              <div className={styles.stepMarker}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepLabel}>Netzwerk</div>
              </div>

              <div className={styles.stepContent}>
                <div className={styles.veroeffentlichungCard}>
                  <h3>Veröffentlichung & gezielter Kontakt</h3>
                  <div className={styles.netzwerkItems}>
                    <div className={styles.netzwerkItem}>
                      <span>🌐</span> Im Marktplatz veröffentlicht
                    </div>
                    <div className={styles.netzwerkItem}>
                      <span>📧</span> An passende Kontakte weitergeleitet
                    </div>
                    <div className={styles.netzwerkItem}>
                      <span>🔒</span> Anonymisiert oder offen – du entscheidest
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SCHRITT 4: Interessenten */}
            <div className={styles.storyStep}>
              <div className={styles.stepMarker}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepLabel}>Interessenten</div>
              </div>

              <div className={styles.stepContent}>
                <div className={styles.interessentenContainer}>
                  {BEISPIEL_INTERESSENTEN.map((interessent) => (
                    <div key={interessent.id} className={styles.interessentCard}>
                      <div className={styles.interessentHeader}>
                        <span className={styles.interessentFlag}>{interessent.land}</span>
                        <div>
                          <div className={styles.interessentStadt}>{interessent.stadt}</div>
                          <div className={styles.interessentRolle}>{interessent.rolle}</div>
                        </div>
                      </div>
                      <p className={styles.interessentInteresse}>→ {interessent.interesse}</p>
                      <p className={styles.interessentBeschreibung}>{interessent.beschreibung}</p>
                      <div className={styles.interessentMatch}>{interessent.match}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SCHRITT 5: Prüfung Interessenten */}
            <div className={styles.storyStep}>
              <div className={styles.stepMarker}>
                <div className={styles.stepNumber}>5</div>
                <div className={styles.stepLabel}>Qualitätscheck</div>
              </div>

              <div className={styles.stepContent}>
                <div className={styles.qualitaetCard}>
                  <h3>Auch die Interessenten werden geprüft</h3>
                  <p>Nicht einfach nur Kontaktdaten weiterleiten. Wir fragen:</p>
                  <div className={styles.qualitaetFragen}>
                    <div className={styles.frage}>Wer passt fachlich?</div>
                    <div className={styles.frage}>Wer passt menschlich?</div>
                    <div className={styles.frage}>Macht die Kooperation Sinn?</div>
                    <div className={styles.frage}>Welche Erwartungen bestehen?</div>
                  </div>
                </div>
              </div>
            </div>

            {/* SCHRITT 6: Kontakt */}
            <div className={styles.storyStep}>
              <div className={styles.stepMarker}>
                <div className={styles.stepNumber}>6</div>
                <div className={styles.stepLabel}>Erstes Gespräch</div>
              </div>

              <div className={styles.stepContent}>
                <div className={styles.kontaktCard}>
                  <h3>Kontaktaufnahme & Zusammenarbeit</h3>
                  <p className={styles.kontaktText}>
                    Erstes Gespräch, Kennenlernen, Online-Meeting oder persönlicher Austausch.
                  </p>
                  <div className={styles.möglichkeiten}>
                    <div className={styles.moeglichkeit}>💬 Direkter Kontakt</div>
                    <div className={styles.moeglichkeit}>📞 Erstes Gespräch</div>
                    <div className={styles.moeglichkeit}>🤝 Pilotprojekt</div>
                    <div className={styles.moeglichkeit}>✓ Oder langfristige Kooperation</div>
                  </div>
                  <p className={styles.kontaktRealitaet}>
                    Manchmal entsteht direkt eine Zusammenarbeit. Manchmal beginnt erstmal nur ein erstes Gespräch oder ein gemeinsamer Markt-Test.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AKTUELLE ANZEIGEN ── */}
      <section className={`${styles.section} ${styles.sectionOff}`}>
        <div className={styles.sectionContent}>
          <h2>Aktuelle Anfragen im Netzwerk</h2>
          <div className={styles.anzeigeGrid}>
            {featuredAnzeigen.map((anzeige) => (
              <AnzeigeCard
                key={anzeige.id}
                id={anzeige.id}
                richtung={anzeige.richtung}
                branche={anzeige.branche}
                beschreibung={anzeige.beschreibung}
                reifegrad={anzeige.reifegrad}
                gueltigBis={anzeige.gueltigBis}
              />
            ))}
          </div>
          <Link href="/marktplatz" className={styles.moreLink}>
            Alle {DEMO_ANFRAGEN.length} Anfragen ansehen →
          </Link>
        </div>
      </section>

      {/* ── KOOPERATIONEN ZUM ANFASSEN ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>Kooperationen zum Anfassen</h2>
          <p className={styles.introText}>
            Schau dir an, welche Arten von Partnerschaften über EasyB2B möglich sind.
          </p>
          <div className={styles.cooperationGrid}>
            {KOOPERATIONS_TEASER.map((coop) => (
              <div key={coop.id} className={styles.cooperationCard}>
                <div className={styles.coopIcon}>{coop.icon}</div>
                <h3 className={styles.coopTitle}>{coop.titel}</h3>
                <p className={styles.coopDesc}>{coop.kurzbeschreibung}</p>
              </div>
            ))}
          </div>
          <div className={styles.cooperationCta}>
            <Link href="/kooperationsbeispiele" className="btn-primary">
              Mehr Kooperationsbeispiele ansehen →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className={styles.ctaBanner}>
        <h2>Bereit für neue Partnerschaften?</h2>
        <p>Konkrete B2B-Anfragen treffen auf echte Unternehmen.</p>
        <Link href="/anfrage-einreichen" className="btn-amber">
          Jetzt Anfrage einreichen →
        </Link>
      </section>

      <Footer />
    </>
  )
}
