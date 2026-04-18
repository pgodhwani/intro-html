# Neobrutalist Portfolio — Sandhya Siddarth

A loud, high-contrast, single-page portfolio built in the neobrutalist style:
hard black borders, offset shadows (no blur), saturated accent colors, chunky
display type paired with monospace body text.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS 3 (custom tokens for shadows, borders, fonts, palette)
- Lucide React for stroke-based icons
- Google Fonts: Archivo Black, Public Sans, JetBrains Mono, Caveat

## Sections

1. **Hero** — sticker headline, live availability chip, avatar card, tech-stack
   marquee, grayscale "Worked With" logo grid.
2. **Wall of Case Studies** — asymmetric CSS grid (1/2-col mix) with cards that
   pop on hover (translate `-4px -4px`, shadow depth increase).
3. **Artwork & Playground** — horizontal-scroll art gallery with handwritten
   captions + a "Gaming I Created" arcade-button grid.
4. **VIP: The Lead Consultant** — dedicated card for Miso the cat, complete
   with a professional bio and a "cat-stack" skill chart.

## Dark Mode

Toggling via the nav button swaps the background to charcoal and switches
shadows to yellow / pink offsets so the thick black borders remain visible
against dark. Preference is persisted in `localStorage`.

## Scripts

```bash
npm install
npm run dev      # local dev
npm run build    # type-check + production bundle
npm run lint     # eslint
npm run preview  # preview prod build
```

## Design tokens

See `tailwind.config.js` for the full token set:

- `shadow-brut` / `shadow-brut-lg` — 8px and 12px hard black offsets
- `shadow-brut-dark*` — light-colored offsets for dark mode
- `border-3` / `border-5` — 3px/5px solid borders
- `bg-brutYellow`, `bg-brutPink`, `bg-brutBlue`, etc.
- `animate-marquee`, `animate-press-down`, `animate-blink`

Photo by [Kelli Tungay](https://unsplash.com/photos/Sj0nhVIb4eY) on
[Unsplash](https://unsplash.com/). Licensed under
[MIT](LICENSE) (c) 2019 GitHub, Inc.
