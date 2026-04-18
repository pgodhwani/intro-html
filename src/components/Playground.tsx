import { Gamepad2, Play, Sparkles, Brush } from 'lucide-react'

type Art = {
  title: string
  caption: string
  color: string
  emoji: string
  rotate: string
  wide?: boolean
}

const artworks: Art[] = [
  { title: 'HOTEL FOR GHOSTS', caption: 'gouache · 2025', color: 'bg-brutPink', emoji: '👻', rotate: '-rotate-2' },
  { title: 'SOFT MONSTERS', caption: 'ink on butter paper', color: 'bg-brutYellow', emoji: '🧌', rotate: 'rotate-1' },
  { title: 'THE BIG SOUP', caption: 'acrylic, gouache', color: 'bg-brutBlue', emoji: '🥣', rotate: '-rotate-1', wide: true },
  { title: 'SUNDAY ZINE #04', caption: 'riso, 2 colors', color: 'bg-brutGreen', emoji: '📓', rotate: 'rotate-2' },
  { title: 'PLANT DAYCARE', caption: 'procreate, 90 min', color: 'bg-brutOrange', emoji: '🪴', rotate: '-rotate-3' },
  { title: 'TINY PARADE', caption: 'marker, 2023', color: 'bg-brutLavender', emoji: '🎉', rotate: 'rotate-1' },
  { title: 'SEA MAIL', caption: 'watercolor', color: 'bg-brutPink', emoji: '🐙', rotate: 'rotate-3' },
  { title: 'CLOUD DINER', caption: 'gouache', color: 'bg-brutYellow', emoji: '🍔', rotate: '-rotate-1', wide: true },
]

type Game = {
  title: string
  tag: string
  blurb: string
  accent: string
  shape: 'circle' | 'square' | 'capsule'
  icon: string
}

const games: Game[] = [
  {
    title: 'NOODLE ARMY',
    tag: 'Tactical · 2024',
    blurb: 'Lead a band of sentient noodles through a soup-based war. Unity, ~3 months.',
    accent: 'bg-brutPink',
    shape: 'circle',
    icon: '🍜',
  },
  {
    title: 'JELLY COURIER',
    tag: 'Runner · 2023',
    blurb: 'You are a jelly. You deliver mail. Physics is your worst enemy.',
    accent: 'bg-brutYellow',
    shape: 'square',
    icon: '🪼',
  },
  {
    title: 'CAT / CAT',
    tag: 'Co-op · 2025 (WIP)',
    blurb: 'Two cats. One laser pointer. Infinite disaster. Playtest soon.',
    accent: 'bg-brutBlue',
    shape: 'capsule',
    icon: '🐈',
  },
  {
    title: 'BUTTON SIMULATOR',
    tag: 'Toy · 2022',
    blurb: 'Just a button. It does something different every time. You will press it.',
    accent: 'bg-brutGreen',
    shape: 'circle',
    icon: '🔘',
  },
]

function ArcadeButton({ g }: { g: Game }) {
  const shapeCls =
    g.shape === 'circle'
      ? 'rounded-full'
      : g.shape === 'capsule'
      ? 'rounded-full aspect-[2/1]'
      : 'rounded-none'
  return (
    <article className="brut-card brut-card-hover p-5 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="brut-chip">
            <Gamepad2 size={14} strokeWidth={3} />
            {g.tag}
          </span>
          <h4 className="mt-3 font-display text-2xl sm:text-3xl leading-none">{g.title}</h4>
        </div>
        <button
          aria-label={`Play ${g.title}`}
          className={`${g.accent} ${shapeCls} border-3 border-ink dark:border-paper aspect-square w-20 sm:w-24 grid place-items-center shadow-brut-sm dark:shadow-brut-dark-sm active:translate-x-1 active:translate-y-1 active:shadow-none hover:animate-press-down`}
        >
          <span className="text-3xl" aria-hidden>{g.icon}</span>
        </button>
      </div>
      <p className="font-mono text-sm opacity-85">{g.blurb}</p>
      <div className="flex items-center justify-between">
        <span className="font-hand text-xl -rotate-2 text-ink/70 dark:text-paper/80">
          press it →
        </span>
        <a href="#" className="brut-btn !py-2 !px-3 !text-xs">
          <Play size={14} strokeWidth={3} /> DEMO
        </a>
      </div>
    </article>
  )
}

export default function Playground() {
  return (
    <section id="play" className="mx-3 sm:mx-6 mt-16 sm:mt-24">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <span className="brut-sticker bg-brutBlue text-white rotate-2 text-xs sm:text-sm">
            Section 03
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl leading-none">
            ARTWORK & PLAYGROUND
          </h2>
          <p className="mt-3 max-w-xl font-mono text-sm sm:text-base opacity-80">
            Personal things, weekend things, and the "I couldn't sleep" things.
            Scroll the gallery →
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="brut-chip"><Brush size={14} strokeWidth={3} /> 132 pieces</span>
          <span className="brut-chip"><Sparkles size={14} strokeWidth={3} /> updated monthly</span>
        </div>
      </div>

      {/* Horizontal gallery */}
      <div className="relative border-3 border-ink dark:border-paper bg-white dark:bg-charcoalSoft shadow-brut dark:shadow-brut-dark p-4 sm:p-6">
        <div className="absolute -top-4 left-6 brut-sticker bg-brutYellow text-xs -rotate-2">
          ART DUMP / 2025
        </div>
        <div className="brut-scroll overflow-x-auto pb-4">
          <ul className="flex gap-5 min-w-max pr-2">
            {artworks.map((a, i) => (
              <li
                key={a.title}
                className={`${a.color} ${a.rotate} border-3 border-ink dark:border-paper shadow-brut-sm dark:shadow-brut-dark-sm p-4 flex flex-col ${
                  a.wide ? 'w-[22rem]' : 'w-60'
                } shrink-0`}
                style={{ marginTop: i % 2 === 0 ? 0 : 18 }}
              >
                <div className="h-40 border-3 border-ink bg-white grid place-items-center text-6xl select-none" aria-hidden>
                  {a.emoji}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <h4 className="font-display text-lg tracking-tight">{a.title}</h4>
                </div>
                <p className="font-hand text-xl -rotate-1 opacity-90">{a.caption}</p>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-2 font-mono text-xs opacity-60">← drag / scroll →</p>
      </div>

      {/* Gaming arcade */}
      <div className="mt-14">
        <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
          <h3 className="font-display text-3xl sm:text-5xl leading-none">
            <span className="inline-block -rotate-2 border-3 border-ink dark:border-paper bg-brutGreen px-3 mr-2">
              GAMING
            </span>
            I CREATED
          </h3>
          <span className="font-hand text-2xl -rotate-3 opacity-80">
            all tested by one very serious cat
          </span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {games.map((g) => (
            <ArcadeButton key={g.title} g={g} />
          ))}
        </div>
      </div>
    </section>
  )
}
