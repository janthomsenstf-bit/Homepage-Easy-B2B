# EasyB2B — Design System & Komponenten

## Farbpalette

```css
/* Primärfarben */
--color-dk: #0a3d2e;        /* Dunkles Grün — Dänemark-Referenz */
--color-de: #1a1a2e;        /* Dunkles Blau-Schwarz — Deutschland */
--color-accent: #e8a020;    /* Gold/Amber — Akzent, CTAs */
--color-accent-green: #2ecc8a; /* Grün — Erfolg, Match */

/* Hintergründe */
--color-bg: #f7f5f0;        /* Warmes Off-White — Haupthintergrund */
--color-card: #ffffff;       /* Weiß — Cards */
--color-surface: #f0ede8;   /* Leicht getöntes Weiß — Sections */

/* Text */
--color-text-primary: #1a1a1a;
--color-text-secondary: #4a4845;
--color-text-muted: #8a8780;

/* Borders */
--color-border: #e0dcd4;
--color-border-light: #ede9e2;

/* Status-Farben */
--color-status-idee: #94a3b8;       /* Grau */
--color-status-konzept: #f59e0b;    /* Amber */
--color-status-bereit: #3b82f6;     /* Blau */
--color-status-sofort: #10b981;     /* Grün */
```

## Typografie

```css
/* Schriften */
--font-heading: 'Playfair Display', Georgia, serif;  /* Überschriften */
--font-body: 'DM Sans', 'Inter', system-ui, sans-serif; /* Fließtext */

/* Größen */
--text-hero: clamp(32px, 5vw, 56px);
--text-h1: clamp(24px, 3.5vw, 40px);
--text-h2: clamp(20px, 2.5vw, 28px);
--text-h3: 20px;
--text-body: 16px;
--text-small: 14px;
--text-xs: 12px;
```

## Komponenten

### Anzeigen-Card
```
Zustände: default | hover | featured
Elemente:
  - Anzeigen-ID (oben links, monospace, klein)
  - Richtungs-Badge (oben rechts: DE→DK oder DK→DE)
  - Branche (mit Icon)
  - Kurzbeschreibung (max. 2 Zeilen, abgeschnitten)
  - Trennlinie
  - Reifegrad-Badge (farbig nach Status)
  - Gültig-bis (klein, muted)
  - "Interesse bekunden"-Button (volle Breite, sekundär)
Hover: leichter Schatten, Border-Farbe wechselt zu accent
```

### Reifegrad-Badge
```
Idee:     grau      bg:#f1f5f9  text:#64748b
Konzept:  amber     bg:#fef3c7  text:#92400e
Bereit:   blau      bg:#dbeafe  text:#1e40af
Sofort:   grün      bg:#d1fae5  text:#065f46
```

### Richtungs-Badge
```
DE→DK:  Flagge DE + Pfeil + Flagge DK
DK→DE:  Flagge DK + Pfeil + Flagge DE
Flaggen als Emoji oder SVG: 🇩🇪 🇩🇰
```

### CTA-Button (Primary)
```css
background: var(--color-accent);
color: #1a1a1a;
border-radius: 8px;
padding: 12px 24px;
font-weight: 600;
font-size: 15px;
transition: transform 0.15s, box-shadow 0.15s;
hover: transform: translateY(-1px); box-shadow: 0 4px 12px rgba(232,160,32,0.3);
```

### CTA-Button (Secondary)
```css
background: transparent;
border: 1.5px solid var(--color-border);
color: var(--color-text-primary);
border-radius: 8px;
padding: 11px 24px;
hover: border-color: var(--color-text-primary);
```

### Filter-Chip
```css
/* Inaktiv */
background: white;
border: 1px solid var(--color-border);
border-radius: 20px;
padding: 6px 14px;
font-size: 13px;
cursor: pointer;

/* Aktiv */
background: var(--color-dk);
color: white;
border-color: var(--color-dk);
```

### Hero-Section
```
Hintergrund: Gradient von --color-dk nach --color-de
Höhe: min. 70vh
Elemente:
  - DE/DK Flaggen mit Pfeil dazwischen
  - Headline (Playfair Display, weiß)
  - Subline (DM Sans, rgba(255,255,255,0.75))
  - 2 Buttons: Primary (accent) + Secondary (weiß/transparent)
  - Dezentes Muster im Hintergrund (optional)
```

### Stats-Bar
```
3–4 Zahlen nebeneinander
Hintergrund: weiß mit Schatten
Zahlen: groß, fett, accent-Farbe
Label: klein, muted
Responsive: 2x2 auf Mobile
```

### Prozess-Steps (Wie es funktioniert)
```
3 Schritte horizontal (Desktop) / vertikal (Mobile)
Schritt: Nummer-Circle (accent) + Titel + Kurzbeschreibung
Verbindung: gestrichelte Linie zwischen Steps
```

---

## Responsive Breakpoints

```css
--mobile: 0–767px
--tablet: 768px–1023px
--desktop: 1024px+

/* Grid */
Mobile:  1 Spalte
Tablet:  2 Spalten
Desktop: 3 Spalten (Marktplatz-Cards)
```

---

## Abstände (Spacing)

```css
--space-xs: 4px
--space-sm: 8px
--space-md: 16px
--space-lg: 24px
--space-xl: 40px
--space-2xl: 64px
--space-3xl: 96px

/* Section-Padding */
--section-padding: clamp(48px, 8vw, 96px) 0;
--container-max: 1200px;
--container-padding: 0 clamp(16px, 4vw, 48px);
```

---

## Schatten

```css
--shadow-card: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
--shadow-card-hover: 0 4px 16px rgba(0,0,0,0.12);
--shadow-dropdown: 0 8px 24px rgba(0,0,0,0.12);
```

---

## Icons

Lucide Icons empfohlen (konsistent, sauber):
- ArrowRight — Navigation, CTAs
- Building2 — Unternehmen
- MapPin — Standort
- Globe — Sprache / Website
- Clock — Gültigkeitsdauer
- CheckCircle — Erfolg
- Filter — Filter-Button
- ChevronDown — Dropdown

---

## Animationen

```css
/* Generell: subtil und schnell */
--transition-fast: 0.15s ease;
--transition-base: 0.25s ease;

/* Card-Hover */
transform: translateY(-2px);
box-shadow: var(--shadow-card-hover);

/* Page-Load: Cards erscheinen mit fade-in + leichtem slide-up */
animation: fadeInUp 0.4s ease forwards;
animation-delay: calc(var(--card-index) * 0.08s);
```
