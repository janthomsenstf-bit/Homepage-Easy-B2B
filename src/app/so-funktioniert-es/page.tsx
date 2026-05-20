import Nav from '@/components/ui/Nav'
import Footer from '@/components/ui/Footer'
import ProcessSteps from '@/components/ProcessSteps'
import FAQItem from '@/components/FAQItem'
import { PROZESS_SUCHENDE, PROZESS_INTERESSENTEN, FAQ, ANFRAGE_DETAILS, BEISPIEL_ANFRAGE, BEISPIEL_INTERESSENTEN } from '@/lib/content'
import styles from './page.module.css'

export const metadata = {
  title: 'So funktioniert\'s – EasyB2B',
  description: 'Erfahre, wie EasyB2B funktioniert: Der Prozess für Suchende und Interessenten, sowie häufig gestellte Fragen.',
}

export default function SoFunktioniertEsPage() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>So funktioniert EasyB2B</h1>
          <p>Zwei einfache Prozesse für Erfolg.</p>
        </div>
      </section>

      {/* ── SUCHENDE ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>Für dich als Suchender</h2>
          <p className={styles.intro}>Du hast eine konkrete Anfrage und möchtest qualifizierte Partner finden?</p>
          <ProcessSteps steps={PROZESS_SUCHENDE} variant="vertical" />
        </div>
      </section>

      {/* ── INTERESSENTEN ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionContent}>
          <h2>Für dich als Interessent</h2>
          <p className={styles.intro}>Du möchtest auf interessante Anfragen antworten und neue Partnerschaften aufbauen?</p>
          <ProcessSteps steps={PROZESS_INTERESSENTEN} variant="vertical" />
        </div>
      </section>

      {/* ── DETAILLIERTES BEISPIEL: STORY TIMELINE ── */}
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

      {/* ── FAQ ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>Häufig gestellte Fragen</h2>
          <div className={styles.faqList}>
            {FAQ.map((item, idx) => (
              <FAQItem
                key={idx}
                frage={item.frage}
                antwort={item.antwort}
                defaultOpen={idx === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── DSGVO NOTICE ── */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2>Datenschutz & Sicherheit</h2>
          <p>
            Bei EasyB2B werden deine Daten mit höchster Sorgfalt behandelt. Wir halten uns strikt an die DSGVO und alle geltenden Datenschutzgesetze in Deutschland und Dänemark.
          </p>
          <ul className={styles.privacyList}>
            <li>Persönliche Daten werden nur mit deinem expliziten Einverständnis weitergegeben</li>
            <li>Du kannst jederzeit einsehen, welche Daten wir speichern und diese löschen</li>
            <li>Alle Anfragen und Interessenten-Daten werden persönlich überprüft</li>
            <li>Sichere SSL-Verschlüsselung für alle Übertragungen</li>
          </ul>
          <p className={styles.linkNote}>
            Vollständige Informationen findest du in unserer{' '}
            <a href="/datenschutz" className={styles.link}>Datenschutzerklärung</a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
