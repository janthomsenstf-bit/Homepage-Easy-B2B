# GitHub & Vercel Setup – Easy-B2B Homepage

Diese Anleitung führt dich Schritt für Schritt durch die Einrichtung von GitHub und Vercel für die Easy-B2B Homepage.

---

## 📋 Voraussetzungen

- GitHub-Account ([github.com](https://github.com))
- Vercel-Account ([vercel.com](https://vercel.com))
- Git installiert auf deinem Computer
- Node.js 18+ installiert

---

## Phase 1: GitHub Repository erstellen

### Schritt 1: Repository auf GitHub anlegen

1. Gehe auf [github.com](https://github.com) und melde dich an
2. Klicke auf das **+** Icon oben rechts → **New repository**
3. Fülle die Felder aus:
   - **Repository name:** `easy-b2b` (oder ein anderer Name)
   - **Description:** `Easy-B2B – B2B-Netzwerk für deutsche und dänische Unternehmen`
   - **Public** oder **Private** (je nach Präferenz)
   - **.gitignore:** Wähle `Node`
   - **.license:** Optional (z.B. MIT)
4. Klicke **Create repository**

### Schritt 2: Lokales Git Repository initialisieren und hochladen

Öffne das Terminal/PowerShell im Projektordner (`C:\Users\flott\Cloude Projekte\Homepage Easy-B2B`) und führe folgende Befehle aus:

```bash
# Initialisiere das lokale Git Repository
git init

# Füge alle Dateien hinzu
git add .

# Erstes Commit
git commit -m "Initial commit: Easy-B2B Homepage"

# Verbinde mit GitHub (ersetze USERNAME/REPO mit deinen Daten)
git branch -M main
git remote add origin https://github.com/USERNAME/easy-b2b.git

# Pushe zum GitHub Repository
git push -u origin main
```

**Hinweis:** Ersetze `USERNAME` mit deinem GitHub-Benutzernamen.

---

## Phase 2: Vercel Deployment einrichten

### Schritt 1: Mit Vercel verbinden

1. Gehe auf [vercel.com](https://vercel.com) und melde dich an
2. Klicke **Add New...** → **Project**
3. Wenn die Aufforderung kommt, verbinde dein GitHub-Account:
   - Klicke **Continue with GitHub**
   - Autorisiere Vercel auf GitHub
4. Vercel listet deine Repositories auf – wähle `easy-b2b`

### Schritt 2: Projekt konfigurieren

Vercel erkennt automatisch, dass es ein Next.js Projekt ist. Überprüfe diese Einstellungen:

- **Framework Preset:** Next.js ✓
- **Root Directory:** `./` (Standard)
- **Build Command:** `npm run build` ✓
- **Output Directory:** `.next` ✓
- **Install Command:** `npm install` ✓

**Environment Variables** (falls später nötig):
- Klicke **Environment Variables** und füge diese ein:
  ```
  NEXT_PUBLIC_SITE_URL = https://easy-b2b.vercel.app
  ```

### Schritt 3: Deploy starten

1. Klicke **Deploy**
2. Vercel baut und deployed dein Projekt automatisch
3. Nach ~2-3 Minuten: Grüner Haken = erfolgreich! ✓

**Deine Live-URL:** `https://easy-b2b.vercel.app` (oder ähnlich)

---

## Phase 3: Domain verbinden (optional)

Wenn du eine eigene Domain haben möchtest:

1. Gehe in Vercel zu **Settings** → **Domains**
2. Klicke **Add Domain**
3. Gib deine Domain ein (z.B. `easy-b2b.de`)
4. Folge den DNS-Anweisungen deines Domain-Anbieters
5. DNS-Records aktualisieren und warten (kann 24h dauern)

---

## Phase 4: Automatische Deployments aktivieren

Das ist bereits voreingestellt! Wenn du Changes zu GitHub pushst, deployed Vercel automatisch:

```bash
# Änderungen machen
# ...

# Commiten und pushen
git add .
git commit -m "Update: Beschreibung der Änderungen"
git push origin main
```

→ Vercel deployed automatisch nach ~1-2 Minuten

---

## 🔧 Häufige Aufgaben

### Inhalte ändern
1. Bearbeite `src/lib/content.ts`
2. Teste lokal: `npm run dev`
3. Commit & Push: `git add . && git commit -m "..." && git push`
4. Vercel deployed automatisch

### Neue Seite hinzufügen
1. Erstelle Folder: `src/app/neue-seite/`
2. Erstelle `page.tsx` und `page.module.css`
3. Inhalte in `src/lib/content.ts` definieren
4. Push → Auto-Deploy

### Build-Fehler beheben
1. Lokal testen: `npm run build`
2. Fehler in deinem Editor sehen und beheben
3. Teste wieder: `npm run dev`
4. Push to GitHub

---

## 🚀 Zusammenfassung der Befehle

| Aufgabe | Befehl |
|---------|--------|
| Lokal entwickeln | `npm run dev` |
| Produktive Seite bauen | `npm run build && npm start` |
| Änderungen zu GitHub | `git add . && git commit -m "..." && git push` |
| Neues Branch erstellen | `git checkout -b feature/name` |
| Branch zu GitHub pushen | `git push origin feature/name` |

---

## 📞 Support & Hilfe

- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Docs:** https://vercel.com/docs
- **Git Cheat Sheet:** https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf

---

**Geschafft!** 🎉 Deine Easy-B2B Homepage läuft jetzt auf Vercel und ist über GitHub versioniert.
