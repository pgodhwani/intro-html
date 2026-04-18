import { ArrowDownRight, Sparkles, MapPin, Coffee } from 'lucide-react'
import Marquee from './Marquee'

const stack = [
  'React', 'TypeScript', 'Figma', 'Illustrator', 'Procreate',
  'Tailwind', 'Blender', 'After Effects', 'Framer', 'Next.js',
  'Notion', 'Swift', 'Unity',
]

const clients = [
  'MOONWAVE', 'KETTLE & CO.', 'NORTH/SOUTH', 'PAPERPUNK',
  'HELLO FRIEND', 'OK STUDIO', 'GOODTYPE', 'LOUD LITTLE',
]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-3 sm:mx-6 mt-6 border-5 border-ink dark:border-paper bg-white dark:bg-charcoalSoft shadow-brut-lg dark:shadow-brut-dark-lg overflow-hidden"
    >
      <div className="absolute inset-0 grid-paper pointer-events-none" aria-hidden />

      {/* Top chip row */}
      <div className="relative flex flex-wrap items-center justify-between gap-3 border-b-3 border-ink dark:border-paper px-5 py-3 bg-brutYellow">
        <div className="flex items-center gap-2 font-mono text-xs sm:text-sm uppercase">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-brutGreen border-2 border-ink animate-blink" aria-hidden />
          Available for freelance — Q3 / 2026
        </div>
        <div className="flex items-center gap-4 font-mono text-xs sm:text-sm">
          <span className="inline-flex items-center gap-1"><MapPin size={14} strokeWidth={3} /> Bengaluru, IN</span>
          <span className="inline-flex items-center gap-1"><Coffee size={14} strokeWidth={3} /> 14 coffees / week</span>
        </div>
      </div>

      {/* Main fold */}
      <div className="relative grid gap-10 px-5 py-12 sm:px-10 sm:py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="brut-sticker -rotate-2 bg-brutPink text-white text-xs sm:text-sm">
              <Sparkles size={14} strokeWidth={3} className="inline -mt-0.5 mr-1" />
              Designer · Illustrator · Mischief-Maker
            </span>
            <span className="brut-sticker rotate-3 bg-brutBlue text-white text-xs sm:text-sm hidden sm:inline-block">
              Portfolio v4.7
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] tracking-tight">
            I MAKE <span className="inline-block -rotate-2 border-3 border-ink dark:border-paper bg-brutYellow px-3">LOUD</span>{' '}
            THINGS <br className="hidden sm:block" />
            THAT <span className="inline-block rotate-1 border-3 border-ink dark:border-paper bg-brutPink text-white px-3">FEEL</span>{' '}
            KIND.
          </h1>

          <p className="mt-8 max-w-xl font-mono text-base sm:text-lg leading-relaxed">
            Hi, I'm <b>Sandhya</b>. I build brand identities, editorial systems,
            playful interfaces and the occasional tiny video game. I run on
            strong coffee, loud palettes, and the stern supervision of one
            small orange cat.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#work" className="brut-btn">
              See the work <ArrowDownRight size={18} strokeWidth={3} />
            </a>
            <a
              href="#contact"
              className="brut-btn !bg-brutPink !text-white"
            >
              Start a project
            </a>
            <span className="font-hand text-2xl -rotate-3 text-ink/70 dark:text-paper/80">
              ← click me, I don't bite
            </span>
          </div>
        </div>

        {/* Avatar sticker stack */}
        <div className="lg:col-span-4 flex items-center justify-center">
          <div className="relative">
            <div className="brut-card rotate-3 p-4 w-64 sm:w-72">
              <div className="aspect-square w-full border-3 border-ink dark:border-paper bg-gradient-to-br from-brutYellow via-brutOrange to-brutPink grid place-items-center overflow-hidden">
                <div className="font-display text-white text-7xl drop-shadow-[3px_3px_0_#000]">SS</div>
              </div>
              <div className="mt-3 flex items-center justify-between font-mono text-xs uppercase">
                <span>ID · 001</span>
                <span>est. 2018</span>
              </div>
            </div>
            <div className="absolute -left-6 -top-6 brut-card -rotate-6 bg-brutGreen px-3 py-2 font-display text-sm">
              HELLO!
            </div>
            <div className="absolute -right-5 -bottom-5 brut-card rotate-6 bg-brutLavender px-3 py-2 font-mono text-xs">
              she / her
            </div>
          </div>
        </div>
      </div>

      {/* Tech stack marquee */}
      <div className="relative border-t-3 border-ink dark:border-paper bg-ink text-paper dark:bg-paper dark:text-ink">
        <Marquee
          ariaLabel="Tech stack"
          items={stack.map((s) => (
            <span className="font-display uppercase text-2xl sm:text-4xl px-1">{s}</span>
          ))}
          separator={<span aria-hidden className="mx-8 text-3xl sm:text-4xl text-brutYellow">◆</span>}
          className="py-4"
        />
      </div>

      {/* Clients / Worked With */}
      <div className="relative border-t-3 border-ink dark:border-paper px-5 py-8 sm:px-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-display text-xl sm:text-2xl">WORKED WITH / SHIPPED FOR</h2>
          <span className="font-mono text-xs uppercase tracking-widest opacity-60">
            2018 — now
          </span>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {clients.map((c) => (
            <li
              key={c}
              className="border-3 border-ink dark:border-paper bg-white dark:bg-charcoalSoft grayscale hover:grayscale-0 shadow-brut-sm dark:shadow-brut-dark-sm text-center py-5 font-display text-sm sm:text-lg tracking-widest"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
