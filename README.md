# Sugar-Punk Portfolio — Priyanka Godhwani

A pastel, dream-cloud, single-page portfolio built in the *sugar-punk* style:
cotton-candy gradients, scalloped ticket-shaped cards, outlined display serif
headlines, retro-script accents and a soft colored border-and-shadow system.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS 3 (custom tokens for shadows, borders, fonts, palette)
- Lucide React for stroke-based icons
- Google Fonts: **DM Serif Display**, **DM Sans**, **DM Mono**, **Pacifico**,
  **Lobster**, **Caveat**

## Sections

1. **Hero** — dreamy cloud gradient with animated sparkles, handwritten
   intro, outlined-serif "PRIYANKA / GODHWANI" stack, a ticket-style ID
   card with rotating circular badge, tech-stack marquee and grayscale
   "Worked With" tiles.
2. **Wall of Case Studies** — asymmetric grid mixing true *ticket cards*
   (with scalloped notches) and *soft rounded cards*; titles use an outlined
   serif second word, à la retro packaging.
3. **Artwork & Playground** — horizontal-scroll gallery of ticket-shaped art
   cards on a candy-stripe backdrop, plus round arcade-button game cards.
4. **VIP: The Lead Consultant** — Miso the Principal Mischief Officer, with
   a rotating "employee of the century" badge and a "cat-stack" skill chart.
5. **Contact** — cloud-bg CTA card with sparkles and a soft link grid.

## Dark Mode

Toggle via the nav button swaps the backdrop to a deep night-sky purple and
switches all offset shadows to a soft pink/cream so the light-colored
borders still read against dark. Preference is persisted in `localStorage`.

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

- `shadow-candy{,-sm,-lg}` — 3/6/10px hard offsets in bubblegum pink
- `shadow-night{,-sm,-lg}` — cream/pink offsets for dark mode
- `border-1.5` / `border-3` — 1.5 and 3px solid borders in plum
- Palette: `cream`, `cottonPink`, `bubblegum`, `hotPink`, `lilac`,
  `skyCandy`, `mint`, `sunshine`, `plum`, `rose`, `inkRose`, `night`
- Fonts: `font-serifDisplay`, `font-sugar`, `font-script`, `font-sans`,
  `font-mono`, `font-hand`
- Animations: `animate-sparkle`, `animate-float`, `animate-spin-slow`,
  `animate-marquee`, `animate-wiggle`, `animate-drift`
- Custom classes: `.ticket`, `.ticket-inner`, `.soft-card`, `.candy-btn`,
  `.chip`, `.outlined`, `.outlined-thick`, `.cloud-bg`, `.starfield`,
  `.candy-scroll`

Licensed under [MIT](LICENSE) (c) 2019 GitHub, Inc.
