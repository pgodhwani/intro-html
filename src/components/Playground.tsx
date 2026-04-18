import { Gamepad2, Play, Brush } from 'lucide-react'
import Sparkle from './Sparkle'

type Art = {
  title: string
  caption: string
  color: string
  emoji: string
  rotate: string
  wide?: boolean
}

const artworks: Art[] = [
  { title: 'HOTEL FOR GHOSTS', caption: 'gouache · 2025', color: 'bg-cottonPink', emoji: '👻', rotate: '-rotate-2' },
  { title: 'SOFT MONSTERS', caption: 'ink on butter paper', color: 'bg-sunshine', emoji: '🧌', rotate: 'rotate-1' },
  { title: 'THE BIG SOUP', caption: 'acrylic, gouache', color: 'bg-skyCandy', emoji: '🥣', rotate: '-rotate-1', wide: true },
  { title: 'SUNDAY ZINE #04', caption: 'riso, 2 colors', color: 'bg-mint', emoji: '📓', rotate: 'rotate-2' },
  { title: 'PLANT DAYCARE', caption: 'procreate, 90 min', color: 'bg-lilac', emoji: '🪴', rotate: '-rotate-3' },
  { title: 'TINY PARADE', caption: 'marker, 2023', color: 'bg-cottonPink', emoji: '🎉', rotate: 'rotate-1' },
  { title: 'SEA MAIL', caption: 'watercolor', color: 'bg-skyCandy', emoji: '🐙', rotate: 'rotate-3' },
  { title: 'CLOUD DINER', caption: 'gouache', color: 'bg-sunshine', emoji: '🍔', rotate: '-rotate-1', wide: true },
]

type Game = {
  title: string
  tag: string
  blurb: string
  accent: string
  icon: string
}

const games: Game[] = [
  {
    title: 'NOODLE ARMY',
    tag: 'Tactical · 2024',
    blurb: 'Lead a band of sentient noodles through a soup-based war. Unity, ~3 months.',
    accent: 'bg-cottonPink',
    icon: '🍜',
  },
  {
    title: 'JELLY COURIER',
    tag: 'Runner · 2023',
    blurb: 'You are a jelly. You deliver mail. Physics is your worst enemy.',
    accent: 'bg-sunshine',
    icon: '🪼',
  },
  {
    title: 'CAT / CAT',
    tag: 'Co-op · 2025 (WIP)',
    blurb: 'Two cats. One laser pointer. Infinite disaster. Playtest soon.',
    accent: 'bg-skyCandy',
    icon: '🐈',
  },
  {
    title: 'BUTTON SIMULATOR',
    tag: 'Toy · 2022',
    blurb: 'Just a button. It does something different every time. You will press it.',
    accent: 'bg-mint',
    icon: '🔘',
  },
]

function ArcadeCard({ g }: { g: Game }) {
  return (
    <article className="soft-card soft-card-hover p-6 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="chip">
            <Gamepad2 size={11} strokeWidth={2.5} />
            {g.tag}
          </span>
          <h4 className="mt-3 font-serifDisplay text-3xl sm:text-4xl leading-none text-inkRose dark:text-star">
            {g.title}
          </h4>
        </div>
        <button
          aria-label={`Play ${g.title}`}
          className={`${g.accent} rounded-full border-1.5 border-plum dark:border-star aspect-square w-20 sm:w-24 grid place-items-center shadow-[3px_3px_0_0_#8C1E5C] dark:shadow-[3px_3px_0_0_#FFE6F5] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all hover:-translate-x-0.5 hover:-translate-y-0.5`}
        >
          <span className="text-3xl" aria-hidden>{g.icon}</span>
        </button>
      </div>
      <p className="font-sans text-sm text-inkRose/85 dark:text-star/85">{g.blurb}</p>
      <div className="flex items-center justify-between">
        <span className="font-hand text-xl -rotate-2 text-rose dark:text-star">
          press it →
        </span>
        <a href="#" className="candy-btn !py-1.5 !px-3 !text-[10px]">
          <Play size={12} strokeWidth={2.5} /> DEMO
        </a>
      </div>
    </article>
  )
}

export default function Playground() {
  return (
    <section id="play" className="mx-3 sm:mx-6 mt-20 sm:mt-28">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
        <div>
          <span className="chip !bg-skyCandy">section · 03</span>
          <h2 className="mt-4 font-serifDisplay text-5xl sm:text-7xl leading-[0.9]">
            <span className="text-rose dark:text-star">artwork</span>{' '}
            <span className="font-sugar text-rose dark:text-star text-4xl sm:text-6xl">&</span>{' '}
            <span className="outlined-thick" style={{ ['--stroke' as string]: 'var(--ink)' }}>playground</span>
          </h2>
          <p className="mt-3 max-w-xl font-sans text-sm sm:text-base text-inkRose/80 dark:text-star/85">
            Personal things, weekend things, and the "I couldn't sleep"
            things. Drag the gallery →
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip"><Brush size={11} strokeWidth={2.5} /> 132 pieces</span>
          <span className="chip"><Sparkle size={10} color="#FF5FA2" /> updated monthly</span>
        </div>
      </div>

      {/* Horizontal gallery with striped backdrop */}
      <div className="relative striped rounded-[28px] border-1.5 border-plum dark:border-star shadow-candy dark:shadow-night p-5 sm:p-7">
        <div className="absolute -top-4 left-8 chip !bg-bubblegum !text-cream !border-plum -rotate-2 !text-[11px]">
          art dump · 2025
        </div>
        <div className="candy-scroll overflow-x-auto pb-3">
          <ul className="flex gap-5 min-w-max pr-2">
            {artworks.map((a, i) => (
              <li
                key={a.title}
                className={`ticket ${a.rotate} p-4 flex flex-col ${a.wide ? 'w-[22rem]' : 'w-60'} shrink-0`}
                style={{ marginTop: i % 2 === 0 ? 0 : 18 }}
              >
                <div className={`ticket-inner ${a.color} h-40 grid place-items-center text-6xl select-none`} aria-hidden>
                  {a.emoji}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <h4 className="font-serifDisplay text-lg text-inkRose dark:text-star">{a.title}</h4>
                </div>
                <p className="font-hand text-xl -rotate-1 text-rose dark:text-star">{a.caption}</p>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-inkRose/60 dark:text-star/70">
          ← drag / scroll →
        </p>
      </div>

      {/* Gaming */}
      <div className="mt-16">
        <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
          <h3 className="font-serifDisplay text-4xl sm:text-5xl leading-none">
            <span className="font-sugar text-rose dark:text-star text-4xl sm:text-6xl mr-2">games</span>
            <span className="outlined-thick" style={{ ['--stroke' as string]: 'var(--ink)' }}>
              I MADE
            </span>
          </h3>
          <span className="font-hand text-2xl -rotate-3 text-rose dark:text-star">
            all playtested by one very serious cat
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {games.map((g) => (
            <ArcadeCard key={g.title} g={g} />
          ))}
        </div>
      </div>
    </section>
  )
}
