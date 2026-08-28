'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import styles from './meinBereich.module.css'
import {
  STATUS_LABEL, STATUS_FARBE, STATUS_ERKLAERUNG,
  RICHTUNG_LABEL, pruefeVollstaendigkeit,
} from '@/lib/anzeigen'

type Anzeige = {
  id: string
  anzeigenId: string
  status: string
  ziel: string
  beschreibung: string
  firmenname: string
  standort: string
  richtung: string
  art: string
  brancheId: string
  ansprechpartner: string
  email: string
  rueckfragen: string | null
  updatedAt: string
  branche: { id: string; name: string } | null
  _count?: { interessenten: number }
}

export default function MeinBereichPage() {
  const router = useRouter()
  const { data: session } = useSession()

  const [anzeigen, setAnzeigen] = useState<Anzeige[]>([])
  const [laedt, setLaedt] = useState(true)
  const [legtAn, setLegtAn] = useState(false)
  const [fehler, setFehler] = useState('')

  useEffect(() => {
    fetch('/api/meine-anzeigen')
      .then(async res => {
        if (!res.ok) throw new Error()
        setAnzeigen(await res.json())
      })
      .catch(() => setFehler('Ihre Anzeigen konnten nicht geladen werden. Bitte laden Sie die Seite neu.'))
      .finally(() => setLaedt(false))
  }, [])

  async function neueAnzeige() {
    setLegtAn(true)
    setFehler('')
    try {
      const res = await fetch('/api/meine-anzeigen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      })
      const daten = await res.json()
      if (!res.ok) {
        setFehler(daten.error || 'Die Anzeige konnte nicht angelegt werden.')
        setLegtAn(false)
        return
      }
      router.push(`/mein-bereich/anzeige/${daten.id}`)
    } catch {
      setFehler('Wir konnten Sie nicht erreichen. Bitte prüfen Sie Ihre Verbindung.')
      setLegtAn(false)
    }
  }

  const mitRueckfragen = anzeigen.filter(a => a.status === 'rueckfragen_offen')

  return (
    <div className={styles.seite}>
      <div className={styles.inner}>

        <div className={styles.kopf}>
          <div>
            <div className={styles.kicker}>Mein Bereich</div>
            <h1 className={styles.titel}>
              {session?.user?.firmenname || 'Ihre Gesuche'}
            </h1>
            <p className={styles.untertitel}>
              Hier verwalten Sie Ihre Gesuche und sehen, wie weit sie sind.
            </p>
          </div>
          <button className={styles.neuButton} onClick={neueAnzeige} disabled={legtAn}>
            {legtAn ? 'Wird angelegt …' : '+ Neues Gesuch'}
          </button>
        </div>

        {fehler && <div className={styles.fehler}>{fehler}</div>}

        {mitRueckfragen.length > 0 && (
          <div className={styles.hinweis}>
            <div className={styles.hinweisTitel}>
              {mitRueckfragen.length === 1
                ? 'Wir haben eine Rückfrage an Sie'
                : `Wir haben Rückfragen zu ${mitRueckfragen.length} Gesuchen`}
            </div>
            <div className={styles.hinweisText}>
              Bitte schauen Sie sich die markierten Gesuche an. Sobald Sie geantwortet haben,
              prüfen wir weiter.
            </div>
          </div>
        )}

        {laedt ? (
          <div className={styles.laden}>Ihre Gesuche werden geladen …</div>
        ) : anzeigen.length === 0 ? (
          <div className={styles.leer}>
            <div className={styles.leerIcon}>📋</div>
            <div className={styles.leerTitel}>Noch kein Gesuch angelegt</div>
            <p className={styles.leerText}>
              Beschreiben Sie, wen oder was Sie auf der anderen Seite der Grenze suchen.
              Sie müssen nicht alles auf einmal ausfüllen — speichern Sie zwischendurch
              und machen Sie später weiter.
            </p>
            <button className={styles.neuButton} onClick={neueAnzeige} disabled={legtAn}>
              {legtAn ? 'Wird angelegt …' : 'Erstes Gesuch erstellen'}
            </button>
          </div>
        ) : (
          <div className={styles.liste}>
            {anzeigen.map(a => {
              const pruefung = pruefeVollstaendigkeit(a as unknown as Record<string, unknown>)
              const istEntwurf = a.status === 'entwurf'
              const anzahl = a._count?.interessenten ?? 0

              return (
                <Link key={a.id} href={`/mein-bereich/anzeige/${a.id}`} className={styles.karte}>
                  <div className={styles.karteKopf}>
                    <div style={{ minWidth: 0 }}>
                      <div className={styles.karteId}>{a.anzeigenId}</div>
                      <h2 className={styles.karteTitel}>
                        {a.ziel?.trim()
                          ? a.ziel
                          : <span className={styles.karteLeer}>Noch ohne Titel</span>}
                      </h2>
                    </div>
                    <span
                      className={styles.statusPille}
                      style={{ background: STATUS_FARBE[a.status] || '#a0aec0' }}
                    >
                      {STATUS_LABEL[a.status] || a.status}
                    </span>
                  </div>

                  <p className={styles.statusErklaerung}>
                    {STATUS_ERKLAERUNG[a.status] || ''}
                  </p>

                  {istEntwurf && !pruefung.vollstaendig && (
                    <>
                      <div className={styles.fortschritt}>
                        <div
                          className={styles.fortschrittBalken}
                          style={{ width: `${Math.round(pruefung.anteil * 100)}%` }}
                        />
                      </div>
                      <p className={styles.statusErklaerung}>
                        {pruefung.fehlend.length === 1
                          ? 'Es fehlt noch eine Angabe.'
                          : `Es fehlen noch ${pruefung.fehlend.length} Angaben.`}
                      </p>
                    </>
                  )}

                  <div className={styles.karteFuss}>
                    {a.branche?.name && <span className={styles.meta}>{a.branche.name}</span>}
                    <span className={styles.meta}>{RICHTUNG_LABEL[a.richtung] || a.richtung}</span>
                    {anzahl > 0 && (
                      <span className={`${styles.meta} ${styles.interessenten}`}>
                        {anzahl === 1 ? '1 Interessent' : `${anzahl} Interessenten`}
                      </span>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
