'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import styles from './editor.module.css'
import {
  STATUS_LABEL, STATUS_FARBE, STATUS_ERKLAERUNG,
  istBearbeitbar, type PflichtFeld,
} from '@/lib/anzeigen'

type Branche = { id: string; name: string }

type Formular = {
  firmenname: string
  standort: string
  website: string
  brancheId: string
  gesuchteBranche: string
  richtung: string
  art: string
  ziel: string
  beschreibung: string
  motivation: string
  mustHaves: string
  niceToHaves: string
  reifegrad: string
  ansprechpartner: string
  email: string
  telefon: string
  antwortAufRueckfragen: string
}

const LEER: Formular = {
  firmenname: '', standort: '', website: '', brancheId: '', gesuchteBranche: '',
  richtung: 'dk_de', art: 'vertrieb', ziel: '', beschreibung: '', motivation: '',
  mustHaves: '', niceToHaves: '', reifegrad: 'bereit',
  ansprechpartner: '', email: '', telefon: '', antwortAufRueckfragen: '',
}

export default function AnzeigeEditorPage({ params }: { params: { id: string } }) {
  const router = useRouter()

  const [form, setForm] = useState<Formular>(LEER)
  const [status, setStatus] = useState('entwurf')
  const [anzeigenId, setAnzeigenId] = useState('')
  const [rueckfragen, setRueckfragen] = useState<string | null>(null)
  const [kiGestuetzt, setKiGestuetzt] = useState(false)
  const [branchen, setBranchen] = useState<Branche[]>([])

  const [laedt, setLaedt] = useState(true)
  const [speichert, setSpeichert] = useState(false)
  const [reichtEin, setReichtEin] = useState(false)
  const [fehler, setFehler] = useState('')
  const [fehlendeFelder, setFehlendeFelder] = useState<PflichtFeld[]>([])
  const [gespeichert, setGespeichert] = useState(false)

  const bearbeitbar = istBearbeitbar(status)

  // ── Laden ──
  useEffect(() => {
    Promise.all([
      fetch(`/api/meine-anzeigen/${params.id}`).then(r => r.ok ? r.json() : Promise.reject()),
      fetch('/api/branchen').then(r => r.ok ? r.json() : []),
    ])
      .then(([a, b]) => {
        setBranchen(b)
        setStatus(a.status)
        setAnzeigenId(a.anzeigenId)
        setRueckfragen(a.rueckfragen)
        setKiGestuetzt(Boolean(a.rueckfragenKiGestuetzt))
        setForm({
          firmenname: a.firmenname ?? '',
          standort: a.standort ?? '',
          website: a.website ?? '',
          brancheId: a.brancheId ?? '',
          gesuchteBranche: a.gesuchteBranche ?? '',
          richtung: a.richtung ?? 'dk_de',
          art: a.art ?? 'vertrieb',
          ziel: a.ziel ?? '',
          beschreibung: a.beschreibung ?? '',
          motivation: a.motivation ?? '',
          mustHaves: a.mustHaves ?? '',
          niceToHaves: a.niceToHaves ?? '',
          reifegrad: a.reifegrad ?? 'bereit',
          ansprechpartner: a.ansprechpartner ?? '',
          email: a.email ?? '',
          telefon: a.telefon ?? '',
          antwortAufRueckfragen: a.antwortAufRueckfragen ?? '',
        })
      })
      .catch(() => setFehler('Dieses Gesuch konnte nicht geladen werden.'))
      .finally(() => setLaedt(false))
  }, [params.id])

  const setzen = (key: keyof Formular) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(f => ({ ...f, [key]: e.target.value }))
    setGespeichert(false)
  }

  const speichern = useCallback(async (still = false) => {
    setSpeichert(true)
    setFehler('')
    setFehlendeFelder([])
    try {
      const res = await fetch(`/api/meine-anzeigen/${params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, persoenlicherTouch: form.motivation }),
      })
      if (!res.ok) {
        const d = await res.json()
        setFehler(d.error || 'Die Änderungen konnten nicht gespeichert werden.')
        return false
      }
      if (!still) {
        setGespeichert(true)
        setTimeout(() => setGespeichert(false), 3000)
      }
      return true
    } catch {
      setFehler('Wir konnten Sie nicht erreichen. Bitte prüfen Sie Ihre Verbindung.')
      return false
    } finally {
      setSpeichert(false)
    }
  }, [form, params.id])

  async function einreichen() {
    setReichtEin(true)
    setFehler('')
    setFehlendeFelder([])

    // Erst speichern, dann einreichen — sonst geht der letzte Tippstand verloren.
    const ok = await speichern(true)
    if (!ok) { setReichtEin(false); return }

    try {
      const res = await fetch(`/api/meine-anzeigen/${params.id}/einreichen`, { method: 'POST' })
      const daten = await res.json()
      if (!res.ok) {
        setFehler(daten.error || 'Das Gesuch konnte nicht eingereicht werden.')
        if (Array.isArray(daten.fehlend)) setFehlendeFelder(daten.fehlend)
        setReichtEin(false)
        return
      }
      router.push('/mein-bereich')
      router.refresh()
    } catch {
      setFehler('Wir konnten Sie nicht erreichen. Bitte prüfen Sie Ihre Verbindung.')
      setReichtEin(false)
    }
  }

  async function loeschen() {
    if (!confirm('Diesen Entwurf wirklich löschen? Das lässt sich nicht rückgängig machen.')) return
    try {
      const res = await fetch(`/api/meine-anzeigen/${params.id}`, { method: 'DELETE' })
      if (!res.ok) {
        const d = await res.json()
        setFehler(d.error || 'Der Entwurf konnte nicht gelöscht werden.')
        return
      }
      router.push('/mein-bereich')
      router.refresh()
    } catch {
      setFehler('Wir konnten Sie nicht erreichen. Bitte prüfen Sie Ihre Verbindung.')
    }
  }

  if (laedt) {
    return <div className={styles.seite}><div className={styles.laden}>Gesuch wird geladen …</div></div>
  }

  return (
    <div className={styles.seite}>
      <div className={styles.inner}>

        <Link href="/mein-bereich" className={styles.zurueck}>← Zurück zu meinen Gesuchen</Link>

        <div className={styles.kopf}>
          <div style={{ minWidth: 0 }}>
            <div className={styles.anzeigenId}>{anzeigenId}</div>
            <h1 className={styles.titel}>
              {form.ziel.trim() || 'Neues Gesuch'}
            </h1>
          </div>
          <span className={styles.statusPille} style={{ background: STATUS_FARBE[status] || '#a0aec0' }}>
            {STATUS_LABEL[status] || status}
          </span>
        </div>

        {rueckfragen && status === 'rueckfragen_offen' && (
          <div className={styles.rueckfragenBox}>
            <div className={styles.rueckfragenTitel}>Unsere Rückfragen an Sie</div>
            <div className={styles.rueckfragenText}>{rueckfragen}</div>
            {kiGestuetzt && (
              <div className={styles.kiHinweis}>
                Diese Rückfragen wurden KI-gestützt vorbereitet und von uns persönlich geprüft,
                bevor wir sie Ihnen geschickt haben.
              </div>
            )}
          </div>
        )}

        {!bearbeitbar && (
          <div className={styles.statusBox}>{STATUS_ERKLAERUNG[status]}</div>
        )}

        {fehler && (
          <div className={styles.fehler}>
            {fehler}
            {fehlendeFelder.length > 0 && (
              <ul>
                {fehlendeFelder.map(f => <li key={f.key}><strong>{f.label}</strong> — {f.hinweis}</li>)}
              </ul>
            )}
          </div>
        )}

        {gespeichert && <div className={styles.gespeichert}>Gespeichert.</div>}

        {/* ── Was suchen Sie? ── */}
        <div className={styles.abschnitt}>
          <h2 className={styles.abschnittTitel}>Was suchen Sie?</h2>
          <p className={styles.abschnittLead}>
            Der Kern Ihres Gesuchs. Schreiben Sie so, wie Sie es einem Kollegen erzählen würden.
          </p>

          <div className={styles.feld}>
            <label className={styles.label} htmlFor="ziel">Ihr Ziel in einem Satz</label>
            <input
              id="ziel" className={styles.input} value={form.ziel} onChange={setzen('ziel')}
              disabled={!bearbeitbar}
              placeholder="Vertriebspartner für unsere Bio-Backwaren in Norddeutschland"
            />
            <p className={styles.hinweis}>Das erscheint als Überschrift auf dem Marktplatz.</p>
          </div>

          <div className={styles.reihe}>
            <div className={styles.feld}>
              <label className={styles.label} htmlFor="richtung">Wo suchen Sie?</label>
              <select id="richtung" className={styles.select} value={form.richtung}
                onChange={setzen('richtung')} disabled={!bearbeitbar}>
                <option value="dk_de">Ich bin in Dänemark und suche in Deutschland</option>
                <option value="de_dk">Ich bin in Deutschland und suche in Dänemark</option>
              </select>
            </div>
            <div className={styles.feld}>
              <label className={styles.label} htmlFor="art">Was für einen Partner?</label>
              <select id="art" className={styles.select} value={form.art}
                onChange={setzen('art')} disabled={!bearbeitbar}>
                <option value="vertrieb">Vertrieb / Handelspartner</option>
                <option value="lieferant">Lieferant / Hersteller</option>
                <option value="kunden">Kunden / Abnehmer</option>
                <option value="kooperation">Kooperationspartner</option>
              </select>
            </div>
          </div>

          <div className={styles.feld}>
            <label className={styles.label} htmlFor="beschreibung">Beschreiben Sie Ihr Vorhaben</label>
            <textarea
              id="beschreibung" className={styles.textarea} value={form.beschreibung}
              onChange={setzen('beschreibung')} disabled={!bearbeitbar}
              placeholder="Was machen Sie, was soll entstehen, was ist Ihnen dabei wichtig?"
            />
          </div>

          <div className={styles.feld}>
            <label className={styles.label} htmlFor="motivation">
              Warum jetzt? <span className={styles.optional}>(optional)</span>
            </label>
            <textarea
              id="motivation" className={styles.textarea} value={form.motivation}
              onChange={setzen('motivation')} disabled={!bearbeitbar}
              placeholder="Was hat den Ausschlag gegeben? Das hilft uns, die richtigen Leute anzusprechen."
              style={{ minHeight: '80px' }}
            />
          </div>

          <div className={styles.reihe}>
            <div className={styles.feld}>
              <label className={styles.label} htmlFor="mustHaves">
                Was muss passen? <span className={styles.optional}>(optional)</span>
              </label>
              <textarea
                id="mustHaves" className={styles.textarea} value={form.mustHaves}
                onChange={setzen('mustHaves')} disabled={!bearbeitbar}
                placeholder="Bedingungen, ohne die es nicht geht"
                style={{ minHeight: '80px' }}
              />
            </div>
            <div className={styles.feld}>
              <label className={styles.label} htmlFor="niceToHaves">
                Was wäre schön? <span className={styles.optional}>(optional)</span>
              </label>
              <textarea
                id="niceToHaves" className={styles.textarea} value={form.niceToHaves}
                onChange={setzen('niceToHaves')} disabled={!bearbeitbar}
                placeholder="Wünschenswert, aber kein Muss"
                style={{ minHeight: '80px' }}
              />
            </div>
          </div>
        </div>

        {/* ── Ihr Unternehmen ── */}
        <div className={styles.abschnitt}>
          <h2 className={styles.abschnittTitel}>Ihr Unternehmen</h2>
          <p className={styles.abschnittLead}>
            Damit Interessenten wissen, mit wem sie es zu tun haben.
          </p>

          <div className={styles.reihe}>
            <div className={styles.feld}>
              <label className={styles.label} htmlFor="firmenname">Firmenname</label>
              <input id="firmenname" className={styles.input} value={form.firmenname}
                onChange={setzen('firmenname')} disabled={!bearbeitbar} />
            </div>
            <div className={styles.feld}>
              <label className={styles.label} htmlFor="standort">Standort</label>
              <input id="standort" className={styles.input} value={form.standort}
                onChange={setzen('standort')} disabled={!bearbeitbar}
                placeholder="Flensburg" />
            </div>
          </div>

          <div className={styles.reihe}>
            <div className={styles.feld}>
              <label className={styles.label} htmlFor="brancheId">Ihre Branche</label>
              <select id="brancheId" className={styles.select} value={form.brancheId}
                onChange={setzen('brancheId')} disabled={!bearbeitbar}>
                <option value="">Bitte wählen …</option>
                {branchen.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
              </select>
            </div>
            <div className={styles.feld}>
              <label className={styles.label} htmlFor="website">
                Website <span className={styles.optional}>(optional)</span>
              </label>
              <input id="website" className={styles.input} value={form.website}
                onChange={setzen('website')} disabled={!bearbeitbar}
                placeholder="www.ihre-firma.de" />
            </div>
          </div>

          <div className={styles.feld}>
            <label className={styles.label} htmlFor="reifegrad">Wie weit sind Sie?</label>
            <select id="reifegrad" className={styles.select} value={form.reifegrad}
              onChange={setzen('reifegrad')} disabled={!bearbeitbar}>
              <option value="idee">Idee — ich sondiere gerade</option>
              <option value="konzept">Konzept — der Plan steht grob</option>
              <option value="bereit">Bereit — ich kann loslegen</option>
              <option value="sofort">Sofort — ich warte nur noch auf den Partner</option>
            </select>
            <p className={styles.hinweis}>
              Ehrlich antworten hilft. Interessenten schätzen es, wenn sie wissen, woran sie sind.
            </p>
          </div>
        </div>

        {/* ── Kontakt ── */}
        <div className={styles.abschnitt}>
          <h2 className={styles.abschnittTitel}>Ihr Kontakt</h2>
          <p className={styles.abschnittLead}>
            Diese Daten sehen Interessenten erst, wenn beide Seiten dem Kontakt zugestimmt haben.
          </p>

          <div className={styles.reihe}>
            <div className={styles.feld}>
              <label className={styles.label} htmlFor="ansprechpartner">Ansprechpartner</label>
              <input id="ansprechpartner" className={styles.input} value={form.ansprechpartner}
                onChange={setzen('ansprechpartner')} disabled={!bearbeitbar} />
            </div>
            <div className={styles.feld}>
              <label className={styles.label} htmlFor="email">E-Mail</label>
              <input id="email" type="email" className={styles.input} value={form.email}
                onChange={setzen('email')} disabled={!bearbeitbar} />
            </div>
          </div>

          <div className={styles.feld}>
            <label className={styles.label} htmlFor="telefon">
              Telefon <span className={styles.optional}>(optional)</span>
            </label>
            <input id="telefon" type="tel" className={styles.input} value={form.telefon}
              onChange={setzen('telefon')} disabled={!bearbeitbar} />
          </div>
        </div>

        {/* ── Antwort auf Rückfragen ── */}
        {status === 'rueckfragen_offen' && (
          <div className={styles.abschnitt}>
            <h2 className={styles.abschnittTitel}>Ihre Antwort</h2>
            <p className={styles.abschnittLead}>
              Antworten Sie auf unsere Rückfragen. Danach schauen wir uns das Gesuch erneut an.
            </p>
            <div className={styles.feld}>
              <textarea
                className={styles.textarea} value={form.antwortAufRueckfragen}
                onChange={setzen('antwortAufRueckfragen')}
                placeholder="Ihre Antwort …"
              />
            </div>
          </div>
        )}

        {/* ── Aktionen ── */}
        {bearbeitbar && (
          <div className={styles.aktionen}>
            <button className={styles.speichern} onClick={() => speichern()} disabled={speichert || reichtEin}>
              {speichert ? 'Wird gespeichert …' : 'Zwischenspeichern'}
            </button>
            <button className={styles.einreichen} onClick={einreichen} disabled={speichert || reichtEin}>
              {reichtEin ? 'Wird eingereicht …' : 'Zur Prüfung einreichen'}
            </button>
            {status === 'entwurf' && (
              <button className={styles.loeschen} onClick={loeschen} disabled={speichert || reichtEin}>
                Entwurf löschen
              </button>
            )}
            <p className={styles.aktionenHinweis}>
              Sie können jederzeit zwischenspeichern und später weitermachen. Erst beim
              Einreichen schauen wir uns Ihr Gesuch an.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
