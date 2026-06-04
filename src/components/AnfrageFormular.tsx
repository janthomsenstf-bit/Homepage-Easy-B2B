'use client';

import { useState, useEffect } from 'react';
import styles from './AnfrageFormular.module.css';

interface Branche { id: string; name: string; }

const SCHRITTE = ['Ihr Unternehmen', 'Was suchen Sie?', 'Details', 'Kontakt'];

const RICHTUNG_OPTIONEN = [
  { value: 'de_dk', label: '🇩🇪 → 🇩🇰  Deutschland sucht dänische Partner' },
  { value: 'dk_de', label: '🇩🇰 → 🇩🇪  Dänemark sucht deutsche Partner' },
];

const ART_OPTIONEN = [
  { value: 'vertrieb',    label: '📦 Vertrieb / Distribution' },
  { value: 'kooperation', label: '🤝 Kooperation / Partnerschaft' },
  { value: 'lieferant',   label: '🏭 Lieferant / Zulieferer' },
  { value: 'kunden',      label: '🛒 Kunden / Abnehmer' },
];

const REIFEGRAD_OPTIONEN = [
  { value: 'idee',    label: '💡 Idee – wir erkunden noch' },
  { value: 'konzept', label: '📋 Konzept – erste Planung läuft' },
  { value: 'bereit',  label: '🚀 Bereit – konkrete Partnersuche' },
  { value: 'sofort',  label: '⚡ Sofort – wir starten umgehend' },
];

const SICHTBARKEIT_OPTIONEN = [
  { value: 'oeffentlich', label: '🌐 Öffentlich – mit Firmennamen sichtbar', sub: 'Mehr Vertrauen, gezieltere Interessenten' },
  { value: 'anonym',      label: '🔒 Anonym – ohne Firmennamen', sub: 'Diskret, nur Branche und Beschreibung sichtbar' },
];

export default function AnfrageFormular() {
  const [schritt, setSchritt] = useState(0);
  const [branchen, setBranchen] = useState<Branche[]>([]);
  const [loading, setLoading] = useState(false);
  const [gesendet, setGesendet] = useState(false);
  const [fehler, setFehler] = useState('');
  const [anzeigenId, setAnzeigenId] = useState('');

  const [form, setForm] = useState({
    firmenname: '', standort: '', website: '',
    richtung: '', art: '', brancheId: '',
    beschreibung: '', ziel: '', mustHaves: '', niceToHaves: '',
    persönlicherTouch: '', reifegrad: '', sichtbarkeit: '',
    gueltigBis: '', ansprechpartner: '', email: '', telefon: '',
  });

  useEffect(() => {
    fetch('/api/branchen')
      .then(r => r.json())
      .then(data => Array.isArray(data) ? setBranchen(data) : setBranchen([]))
      .catch(() => setBranchen([]));
    // Standard-Ablaufdatum: 3 Monate
    const d = new Date();
    d.setMonth(d.getMonth() + 3);
    setForm(f => ({ ...f, gueltigBis: d.toISOString().split('T')[0] }));
  }, []);

  const set = (k: keyof typeof form, v: string) => setForm(f => ({ ...f, [k]: v }));

  function validierungscheck(): string {
    if (schritt === 0) {
      if (!form.firmenname.trim()) return 'Bitte Firmennamen eintragen.';
      if (!form.standort.trim()) return 'Bitte Standort eintragen.';
      if (!form.richtung) return 'Bitte Richtung auswählen.';
      if (!form.art) return 'Bitte Art der Suche auswählen.';
      if (!form.brancheId) return 'Bitte Branche auswählen.';
    }
    if (schritt === 1) {
      if (!form.beschreibung.trim() || form.beschreibung.length < 50) return 'Bitte mindestens 50 Zeichen beschreiben was Sie suchen.';
      if (!form.ziel.trim()) return 'Bitte das konkrete Ziel eintragen.';
    }
    if (schritt === 2) {
      if (!form.persönlicherTouch.trim()) return 'Bitte eine persönliche Note eintragen.';
      if (!form.reifegrad) return 'Bitte Reife auswählen.';
      if (!form.sichtbarkeit) return 'Bitte Sichtbarkeit auswählen.';
    }
    if (schritt === 3) {
      if (!form.ansprechpartner.trim()) return 'Bitte Ansprechpartner eintragen.';
      if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Bitte gültige E-Mail-Adresse eintragen.';
    }
    return '';
  }

  function weiter() {
    const err = validierungscheck();
    if (err) { setFehler(err); return; }
    setFehler('');
    setSchritt(s => s + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function zurueck() {
    setFehler('');
    setSchritt(s => s - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function absenden() {
    const err = validierungscheck();
    if (err) { setFehler(err); return; }
    setLoading(true);
    setFehler('');
    try {
      const res = await fetch('/api/anfragen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setAnzeigenId(data.anzeigenId || '');
        setGesendet(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setFehler(data.error || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
      }
    } catch {
      setFehler('Verbindungsfehler. Bitte prüfen Sie Ihre Internetverbindung.');
    } finally {
      setLoading(false);
    }
  }

  // ── ERFOLG ──
  if (gesendet) {
    return (
      <div className={styles.erfolg}>
        <div className={styles.erfolgsIcon}>✅</div>
        <h2>Ihre Anfrage ist eingegangen!</h2>
        {anzeigenId && <div className={styles.referenz}>Ihre Referenz: <strong>{anzeigenId}</strong></div>}
        <p>Wir prüfen Ihre Anfrage persönlich und melden uns innerhalb von <strong>1–2 Werktagen</strong>.</p>
        <div className={styles.erfolgsSchritte}>
          <div className={styles.erfolgsSchritt}><span>1</span> Wir prüfen Ihre Angaben</div>
          <div className={styles.erfolgsSchritt}><span>2</span> Freigabe für den Marktplatz</div>
          <div className={styles.erfolgsSchritt}><span>3</span> Interessenten melden sich</div>
          <div className={styles.erfolgsSchritt}><span>4</span> Wir stellen den Kontakt her</div>
        </div>
        <p className={styles.erfolgsNote}>Sie haben eine Bestätigung per E-Mail erhalten.</p>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {/* Fortschrittsbalken */}
      <div className={styles.progress}>
        {SCHRITTE.map((s, i) => (
          <div key={i} className={`${styles.progressSchritt} ${i === schritt ? styles.aktiv : ''} ${i < schritt ? styles.erledigt : ''}`}>
            <div className={styles.progressDot}>{i < schritt ? '✓' : i + 1}</div>
            <span className={styles.progressLabel}>{s}</span>
          </div>
        ))}
        <div className={styles.progressLinie}>
          <div className={styles.progressLinieAktiv} style={{ width: `${(schritt / (SCHRITTE.length - 1)) * 100}%` }} />
        </div>
      </div>

      {/* Fehler-Banner */}
      {fehler && <div className={styles.fehler}>⚠️ {fehler}</div>}

      {/* ── SCHRITT 1: Unternehmen ── */}
      {schritt === 0 && (
        <div className={styles.formBlock}>
          <h3 className={styles.schrittTitel}>Über Ihr Unternehmen</h3>

          <div className={styles.feldGruppe}>
            <label className={styles.label}>Firmenname <span className={styles.pflicht}>*</span></label>
            <input className={styles.input} value={form.firmenname} onChange={e => set('firmenname', e.target.value)} placeholder="z.B. Müller Maschinenbau GmbH" />
          </div>

          <div className={styles.feldGruppe}>
            <label className={styles.label}>Standort (Stadt, Land) <span className={styles.pflicht}>*</span></label>
            <input className={styles.input} value={form.standort} onChange={e => set('standort', e.target.value)} placeholder="z.B. Flensburg, Deutschland" />
          </div>

          <div className={styles.feldGruppe}>
            <label className={styles.label}>Website <span className={styles.optional}>(optional)</span></label>
            <input className={styles.input} value={form.website} onChange={e => set('website', e.target.value)} placeholder="https://www.ihre-website.de" />
          </div>

          <div className={styles.feldGruppe}>
            <label className={styles.label}>In welche Richtung suchen Sie? <span className={styles.pflicht}>*</span></label>
            <div className={styles.optionenGrid}>
              {RICHTUNG_OPTIONEN.map(o => (
                <button key={o.value} type="button" onClick={() => set('richtung', o.value)}
                  className={`${styles.optionCard} ${form.richtung === o.value ? styles.optionAktiv : ''}`}>
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.feldGruppe}>
            <label className={styles.label}>Was suchen Sie? <span className={styles.pflicht}>*</span></label>
            <div className={styles.optionenGrid}>
              {ART_OPTIONEN.map(o => (
                <button key={o.value} type="button" onClick={() => set('art', o.value)}
                  className={`${styles.optionCard} ${form.art === o.value ? styles.optionAktiv : ''}`}>
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.feldGruppe}>
            <label className={styles.label}>Ihre Branche <span className={styles.pflicht}>*</span></label>
            <select className={styles.select} value={form.brancheId} onChange={e => set('brancheId', e.target.value)}>
              <option value="">Bitte wählen…</option>
              {branchen.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
            </select>
          </div>
        </div>
      )}

      {/* ── SCHRITT 2: Was suchen Sie ── */}
      {schritt === 1 && (
        <div className={styles.formBlock}>
          <h3 className={styles.schrittTitel}>Was suchen Sie genau?</h3>

          <div className={styles.feldGruppe}>
            <label className={styles.label}>Beschreibung Ihrer Suche <span className={styles.pflicht}>*</span></label>
            <p className={styles.hint}>Mindestens 50 Zeichen. Konkret und klar — das zieht die richtigen Partner an.</p>
            <textarea className={styles.textarea} rows={5} value={form.beschreibung}
              onChange={e => set('beschreibung', e.target.value)}
              placeholder="Wir sind ein mittelständischer Maschinenbauer und suchen einen dänischen Partner für die gemeinsame Entwicklung von Windkraft-Komponenten. Wir bringen CNC-Fertigung und Stahlverarbeitung mit…" />
            <div className={styles.zeichenZaehler}>{form.beschreibung.length} Zeichen {form.beschreibung.length < 50 && <span className={styles.zeichenWarn}>(min. 50)</span>}</div>
          </div>

          <div className={styles.feldGruppe}>
            <label className={styles.label}>Konkretes Ziel <span className={styles.pflicht}>*</span></label>
            <p className={styles.hint}>Ein Satz — was soll am Ende herauskommen?</p>
            <input className={styles.input} value={form.ziel} onChange={e => set('ziel', e.target.value)}
              placeholder="z.B. Gemeinsame Entwicklung von Windkraft-Komponenten ab Q3 2026" />
          </div>

          <div className={styles.feldGruppe}>
            <label className={styles.label}>Must-Haves <span className={styles.optional}>(optional)</span></label>
            <p className={styles.hint}>Was muss ein Partner unbedingt mitbringen?</p>
            <textarea className={styles.textarea} rows={3} value={form.mustHaves}
              onChange={e => set('mustHaves', e.target.value)}
              placeholder="z.B. Mindestens 5 Jahre Erfahrung in der Windenergiebranche, eigene Fertigung, Englisch Pflicht" />
          </div>

          <div className={styles.feldGruppe}>
            <label className={styles.label}>Nice-to-Haves <span className={styles.optional}>(optional)</span></label>
            <p className={styles.hint}>Was wäre ein Bonus, aber kein Muss?</p>
            <textarea className={styles.textarea} rows={3} value={form.niceToHaves}
              onChange={e => set('niceToHaves', e.target.value)}
              placeholder="z.B. Erfahrung mit Offshore-Projekten, ISO-Zertifizierung, Nähe zur Grenzregion" />
          </div>
        </div>
      )}

      {/* ── SCHRITT 3: Details ── */}
      {schritt === 2 && (
        <div className={styles.formBlock}>
          <h3 className={styles.schrittTitel}>Details & Sichtbarkeit</h3>

          <div className={styles.feldGruppe}>
            <label className={styles.label}>Persönliche Note <span className={styles.pflicht}>*</span></label>
            <p className={styles.hint}>Was sollen potenzielle Partner über Sie als Mensch wissen? Das schafft Vertrauen.</p>
            <textarea className={styles.textarea} rows={3} value={form.persönlicherTouch}
              onChange={e => set('persönlicherTouch', e.target.value)}
              placeholder="z.B. Wir sind ein Familienunternehmen in dritter Generation. Uns ist ein ehrlicher Austausch wichtiger als schnelle Deals." />
          </div>

          <div className={styles.feldGruppe}>
            <label className={styles.label}>Wie weit sind Sie? <span className={styles.pflicht}>*</span></label>
            <div className={styles.optionenGrid}>
              {REIFEGRAD_OPTIONEN.map(o => (
                <button key={o.value} type="button" onClick={() => set('reifegrad', o.value)}
                  className={`${styles.optionCard} ${form.reifegrad === o.value ? styles.optionAktiv : ''}`}>
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.feldGruppe}>
            <label className={styles.label}>Sichtbarkeit auf dem Marktplatz <span className={styles.pflicht}>*</span></label>
            <div className={styles.visOptionen}>
              {SICHTBARKEIT_OPTIONEN.map(o => (
                <button key={o.value} type="button" onClick={() => set('sichtbarkeit', o.value)}
                  className={`${styles.visCard} ${form.sichtbarkeit === o.value ? styles.visAktiv : ''}`}>
                  <div className={styles.visLabel}>{o.label}</div>
                  <div className={styles.visSub}>{o.sub}</div>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.feldGruppe}>
            <label className={styles.label}>Gültig bis <span className={styles.optional}>(Standard: 3 Monate)</span></label>
            <input type="date" className={styles.input} value={form.gueltigBis} onChange={e => set('gueltigBis', e.target.value)} />
          </div>
        </div>
      )}

      {/* ── SCHRITT 4: Kontakt ── */}
      {schritt === 3 && (
        <div className={styles.formBlock}>
          <h3 className={styles.schrittTitel}>Ihre Kontaktdaten</h3>
          <p className={styles.hint} style={{ marginBottom: '24px' }}>Ihre Kontaktdaten werden <strong>nicht</strong> öffentlich angezeigt — wir leiten sie nur an geprüfte Interessenten weiter.</p>

          <div className={styles.feldGruppe}>
            <label className={styles.label}>Ansprechpartner (Name) <span className={styles.pflicht}>*</span></label>
            <input className={styles.input} value={form.ansprechpartner} onChange={e => set('ansprechpartner', e.target.value)} placeholder="z.B. Thomas Müller" />
          </div>

          <div className={styles.feldGruppe}>
            <label className={styles.label}>E-Mail-Adresse <span className={styles.pflicht}>*</span></label>
            <input type="email" className={styles.input} value={form.email} onChange={e => set('email', e.target.value)} placeholder="ihre@email.de" />
          </div>

          <div className={styles.feldGruppe}>
            <label className={styles.label}>Telefon <span className={styles.optional}>(optional)</span></label>
            <input type="tel" className={styles.input} value={form.telefon} onChange={e => set('telefon', e.target.value)} placeholder="+49 461 123 456" />
          </div>

          {/* Zusammenfassung */}
          <div className={styles.zusammenfassung}>
            <div className={styles.zusammenfassungTitel}>📋 Ihre Angaben im Überblick</div>
            <div className={styles.zusammenfassungGrid}>
              <div><span>Firma:</span> {form.firmenname}</div>
              <div><span>Standort:</span> {form.standort}</div>
              <div><span>Richtung:</span> {form.richtung === 'de_dk' ? '🇩🇪 → 🇩🇰' : '🇩🇰 → 🇩🇪'}</div>
              <div><span>Art:</span> {ART_OPTIONEN.find(a => a.value === form.art)?.label}</div>
              <div><span>Reifegrad:</span> {REIFEGRAD_OPTIONEN.find(r => r.value === form.reifegrad)?.label}</div>
              <div><span>Sichtbarkeit:</span> {form.sichtbarkeit === 'oeffentlich' ? '🌐 Öffentlich' : '🔒 Anonym'}</div>
            </div>
          </div>

          <p className={styles.datenschutz}>
            Mit dem Absenden stimmen Sie zu, dass Easy-B2B Ihre Daten zur Vermittlung von Geschäftskontakten verarbeitet.
            Keine Weitergabe an Dritte ohne Ihre Zustimmung.
          </p>
        </div>
      )}

      {/* Navigation */}
      <div className={styles.navigation}>
        {schritt > 0 && (
          <button className={styles.btnZurueck} onClick={zurueck} disabled={loading}>
            ← Zurück
          </button>
        )}
        <div style={{ flex: 1 }} />
        {schritt < SCHRITTE.length - 1 ? (
          <button className={styles.btnWeiter} onClick={weiter}>
            Weiter → <span className={styles.naechsterSchritt}>{SCHRITTE[schritt + 1]}</span>
          </button>
        ) : (
          <button className={styles.btnAbsenden} onClick={absenden} disabled={loading}>
            {loading ? '⏳ Wird gesendet…' : '✅ Anfrage einreichen'}
          </button>
        )}
      </div>
    </div>
  );
}
