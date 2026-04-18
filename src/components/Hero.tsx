import { ArrowDownRight, MapPin, Coffee, Heart } from 'lucide-react'
import Marquee from './Marquee'
import Sparkle, { Starfield } from './Sparkle'
import RotatingBadge from './RotatingBadge'

const stack = [
  'Figma', 'Procreate', 'Illustrator', 'Photoshop',
  'Notion', 'Framer', 'React', 'After Effects',
  'InDesign', 'Blender', 'Risograph', 'Tailwind',
]

const clients = [
  'MOONWAVE', 'KETTLE & CO.', 'NORTH/SOUTH', 'PAPERPUNK',
  'HELLO FRIEND', 'OK STUDIO', 'GOODTYPE', 'LOUD LITTLE',
]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-3 sm:mx-6 mt-6 overflow-hidden rounded-[28px] border-1.5 border-plum shadow-candy dark:border-star dark:shadow-night"
    >
      {/* Dreamy cloud backdrop */}
      <div className="relative cloud-bg">
        <Starfield count={22} />

        {/* Top chip bar */}
        <div className="relative flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b-1.5 border-plum/60 dark:border-star/70 bg-cream/60 dark:bg-night/60 backdrop-blur-sm">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-inkRose/80 dark:text-star/85">
            <span className="inline-block h-2 w-2 rounded-full bg-mint border border-plum dark:border-star animate-sparkle" aria-hidden />
            open for freelance · q3 / 2026
          </div>
          <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-inkRose/80 dark:text-star/85">
            <span className="inline-flex items-center gap-1"><MapPin size={12} strokeWidth={2.5} /> mumbai · in</span>
            <span className="inline-flex items-center gap-1"><Coffee size={12} strokeWidth={2.5} /> fueled on chai</span>
          </div>
        </div>

        {/* Main fold */}
        <div className="relative grid gap-12 px-5 py-16 sm:px-10 sm:py-20 lg:grid-cols-12 lg:py-28">
          {/* Copy */}
          <div className="lg:col-span-8 relative">
            {/* Floating sparkles */}
            <Sparkle className="absolute -top-2 left-[38%] animate-float" size={26} color="#ffffff" />
            <Sparkle className="absolute top-16 -left-4 animate-sparkle" size={18} color="#FFE6F5" />
            <Sparkle className="absolute top-6 right-8 animate-sparkle-slow" size={14} color="#C9B6FF" />

            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="chip !bg-cottonPink dark:!bg-lilac/20">
                <Heart size={11} strokeWidth={2.5} fill="currentColor" />
                designer · illustrator · daydreamer
              </span>
              <span className="chip !bg-skyCandy/60 dark:!bg-skyCandy/20">
                portfolio · v.priyanka
              </span>
            </div>

            {/* The big hello — outlined serif stack like Cotton Candy */}
            <div className="relative">
              <p className="font-hand text-3xl sm:text-5xl text-rose dark:text-star -rotate-2 mb-2">
                hey, hi, hello! i'm
              </p>
              <h1 className="font-serifDisplay text-[clamp(3.4rem,10vw,9rem)] leading-[0.85] tracking-tight text-rose dark:text-star">
                PRIYANKA
              </h1>
              <h1
                className="font-serifDisplay text-[clamp(3.4rem,10vw,9rem)] leading-[0.85] tracking-tight outlined-thick -mt-1"
                style={{ ['--stroke' as string]: 'var(--ink)' }}
              >
                GODHWANI
              </h1>
              <p className="mt-6 font-sugar text-rose dark:text-star text-3xl sm:text-4xl">
                a sugar-punk studio of one.
              </p>
            </div>

            <p className="mt-6 max-w-xl font-sans text-base sm:text-lg leading-relaxed text-inkRose/85 dark:text-star/85">
              I design brand identities, editorial systems and soft-around-
              the-edges digital products. Think candy-floss palettes with a
              punk backbone — and the occasional tiny video game.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#work" className="candy-btn">
                See the work <ArrowDownRight size={16} strokeWidth={2.5} />
              </a>
              <a href="#contact" className="candy-btn !bg-lilac !text-inkRose">
                Start a project
              </a>
              <span className="font-hand text-2xl -rotate-3 text-rose/80 dark:text-star/80">
                ← press me, it's ok
              </span>
            </div>
          </div>

          {/* Ticket ID + badge cluster */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="relative">
              {/* Ticket-style ID card */}
              <div className="ticket p-4 rotate-[-4deg] w-[19rem]">
                <div className="ticket-inner p-3">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-rose/80 dark:text-star/80">
                    <span>hand-crafted</span>
                    <span>id · 001</span>
                  </div>
                  <div className="mt-2 aspect-[4/3] w-full rounded-lg border-1.5 border-plum/70 dark:border-star/70 bg-gradient-to-br from-cottonPink via-lilac to-skyCandy grid place-items-center overflow-hidden">
                    <span className="font-serifDisplay text-[6rem] leading-none text-white/90 drop-shadow-[2px_2px_0_#8C1E5C]">
                      PG
                    </span>
                  </div>
                  <div className="mt-3 flex items-baseline justify-between">
                    <span className="font-sugar text-3xl text-rose dark:text-star">priyanka</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-inkRose/70 dark:text-star/70">she/her</span>
                  </div>
                  <p className="font-serifDisplay text-sm text-inkRose dark:text-star mt-1">
                    EST. <span className="outlined" style={{ ['--stroke' as string]: '#D6286F' }}>2018</span>
                  </p>
                </div>
              </div>

              {/* Rotating "priyanka godhwani" badge */}
              <div className="absolute -top-8 -right-8 animate-float">
                <RotatingBadge
                  text="priyanka godhwani"
                  size={112}
                  fill="#FF5FA2"
                  textColor="#FFF6EA"
                  inner="PG"
                />
              </div>

              {/* Floating mini stickers */}
              <div className="absolute -left-6 -bottom-4 rotate-[-12deg] font-hand text-2xl text-rose dark:text-star">
                made with love ✿
              </div>
            </div>
          </div>
        </div>

        {/* Tech stack marquee */}
        <div className="relative border-y-1.5 border-plum/70 dark:border-star/70 bg-cream/70 dark:bg-night/70 backdrop-blur-sm">
          <Marquee
            ariaLabel="Tech stack"
            items={stack.map((s) => (
              <span className="font-serifDisplay text-3xl sm:text-5xl px-2 text-rose dark:text-star">
                {s}
              </span>
            ))}
            separator={<span aria-hidden className="mx-7 text-2xl sm:text-3xl"><Sparkle size={26} color="#FF5FA2" /></span>}
            className="py-4"
          />
        </div>

        {/* Worked With */}
        <div className="relative px-5 py-10 sm:px-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <h2 className="font-serifDisplay text-2xl sm:text-3xl text-rose dark:text-star">
              worked with / shipped for
            </h2>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-inkRose/70 dark:text-star/70">
              2018 — now
            </span>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {clients.map((c) => (
              <li
                key={c}
                className="rounded-2xl border-1.5 border-plum/70 dark:border-star/70 bg-cream/80 dark:bg-nightSoft grayscale hover:grayscale-0 text-center py-4 font-serifDisplay tracking-[0.08em] text-sm sm:text-base text-inkRose dark:text-star shadow-[3px_3px_0_0_#FF5FA2] dark:shadow-[3px_3px_0_0_#FFE6F5]"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
