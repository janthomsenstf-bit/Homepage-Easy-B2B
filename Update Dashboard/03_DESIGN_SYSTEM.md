# EasyB2B — Design System

## Farbpalette
```css
--color-dk: #0a3d2e;          /* Dunkles Grün */
--color-de: #1a1a2e;          /* Dunkles Blau-Schwarz */
--color-accent: #e8a020;      /* Gold/Amber — CTAs */
--color-accent-green: #2ecc8a;/* Grün — Erfolg, Match */
--color-bg: #f7f5f0;          /* Warmes Off-White */
--color-card: #ffffff;
--color-border: #e0dcd4;
--color-text-primary: #1a1a1a;
--color-text-secondary: #4a4845;
--color-text-muted: #8a8780;

/* Status */
--color-match-good: #10b981;  /* >80% */
--color-match-mid: #f59e0b;   /* 50-80% */
--color-match-bad: #ef4444;   /* <50% */
--color-ko: #dc2626;          /* K.O.-Kriterium */
```

## Typografie
```css
--font-heading: 'Playfair Display', Georgia, serif;
--font-body: 'DM Sans', 'Inter', system-ui, sans-serif;
--text-hero: clamp(32px, 5vw, 56px);
--text-h1: clamp(24px, 3.5vw, 40px);
--text-body: 16px;
--text-small: 14px;
--text-xs: 12px;
```

## Komponenten

### Match-Score Badge
```
>80%:  grüner Hintergrund, weiß Text
50-80%: amber Hintergrund
<50%:  roter Hintergrund
K.O.:  roter Rand + K.O.-Icon
```

### Anzeigen-Card (öffentlich)
- Anzeigen-ID oben links (monospace)
- Richtungs-Badge oben rechts (🇩🇪→🇩🇰 oder 🇩🇰→🇩🇪)
- Reifegrad-Badge farbig
- Hover: leichter Schatten, Border wechselt zu accent

### Reifegrad-Badge
```
Idee:    grau   bg:#f1f5f9 text:#64748b
Konzept: amber  bg:#fef3c7 text:#92400e
Bereit:  blau   bg:#dbeafe text:#1e40af
Sofort:  grün   bg:#d1fae5 text:#065f46
```

### Dashboard-Sidebar (Desktop)
Breite: 240px
Navigationspunkte mit Icons (Lucide)
Aktiver Punkt: accent-Hintergrund

### Inbox-Karte (Dashboard)
```
┌─────────────────────────────────────┐
│ ⚡ Match gefunden          94%      │
│ Transport Nord GmbH                 │
│ Anfrage: ANZ-2024-047 · Logistik    │
│ [Freigeben →]   [Details]           │
└─────────────────────────────────────┘
```

### KI-Bewertungs-Panel (Interessenten-Detail)
```
┌─────────────────────────────────────┐
│ KI-Bewertung            Score: 94%  │
│ ─────────────────────────────────── │
│ ✓ 8 LKWs               aus Anzeige │
│ ✓ Hebebühne             aus Anzeige │
│ ✓ Lager SH              aus Anzeige │
│ ✗ Zollerfahrung DK      KI ergänzt  │
│ ─────────────────────────────────── │
│ "Starker Match. Fehlende Zoll-      │
│  erfahrung ist kein K.O., kann      │
│  nachgeschult werden."              │
│ ─────────────────────────────────── │
│ [Freigeben ✓]  [Ablehnen]           │
└─────────────────────────────────────┘
```

## Responsive Breakpoints
```
Mobile:  0–767px   (1 Spalte)
Tablet:  768–1023px (2 Spalten)
Desktop: 1024px+   (3 Spalten Marktplatz, Sidebar Dashboard)
```

## Icons
Lucide React — konsistente Verwendung:
- ArrowRight — Navigation, CTAs
- Building2 — Unternehmen
- MapPin — Standort
- Truck — Logistik
- Brain — KI/Matching
- CheckCircle — Erfolg/Freigabe
- XCircle — Ablehnung
- AlertTriangle — Warnung/Stalled
- Clock — Timer/Ablauf
- Filter — Filter
- ChevronDown — Dropdown
- Sparkles — KI-generiert (Badge für KI-Vorschläge)
