import { ArrowUpRight } from 'lucide-react'

type CaseStudy = {
  title: string
  subtitle: string
  meta: string
  tags: string[]
  year: string
  color: string // tailwind bg class
  textInvert?: boolean
  span: string // grid col span
  rowSpan?: string
  rotate?: string
  href?: string
}

const studies: CaseStudy[] = [
  {
    title: 'MOONWAVE Rebrand',
    subtitle: 'Identity system for a sleep-tech startup that grew up.',
    meta: 'Brand Identity · Motion · Print',
    tags: ['Identity', 'Print', 'Motion'],
    year: '2026',
    color: 'bg-brutYellow',
    span: 'lg:col-span-7',
    rowSpan: 'lg:row-span-2',
    rotate: '-rotate-[0.4deg]',
    href: '#',
  },
  {
    title: 'Kettle & Co.',
    subtitle: 'Packaging for an heirloom-spice pantry line.',
    meta: 'Packaging · Illustration',
    tags: ['Pack', 'Illustration'],
    year: '2025',
    color: 'bg-brutPink',
    textInvert: true,
    span: 'lg:col-span-5',
    rotate: 'rotate-[0.6deg]',
    href: '#',
  },
  {
    title: 'NORTH/SOUTH Editorial',
    subtitle: 'A 96-page zine about climate futures, printed risograph.',
    meta: 'Editorial · Typography',
    tags: ['Editorial', 'Riso'],
    year: '2025',
    color: 'bg-brutBlue',
    textInvert: true,
    span: 'lg:col-span-4',
    rotate: '-rotate-[0.3deg]',
    href: '#',
  },
  {
    title: 'Paperpunk OS',
    subtitle: 'A neobrutalist design system for tiny teams. 42 components.',
    meta: 'Product · Design System',
    tags: ['DesignSys', 'Figma', 'Tokens'],
    year: '2024',
    color: 'bg-brutGreen',
    span: 'lg:col-span-8',
    rotate: 'rotate-[0.2deg]',
    href: '#',
  },
  {
    title: 'Hello Friend',
    subtitle: 'Mental-health onboarding illustrations. Warm, not saccharine.',
    meta: 'Illustration · Motion',
    tags: ['Illustration', 'Onboarding'],
    year: '2024',
    color: 'bg-brutLavender',
    span: 'lg:col-span-6',
    rotate: '-rotate-[0.6deg]',
    href: '#',
  },
  {
    title: 'OK Studio Site',
    subtitle: 'Micro-site for a type foundry. Variable fonts, maximum attitude.',
    meta: 'Web · Typography',
    tags: ['Web', 'Type'],
    year: '2023',
    color: 'bg-brutOrange',
    span: 'lg:col-span-6',
    rotate: 'rotate-[0.4deg]',
    href: '#',
  },
]

function Card({ s }: { s: CaseStudy }) {
  const text = s.textInvert ? 'text-white' : 'text-ink'
  return (
    <a
      href={s.href ?? '#'}
      className={[
        'group relative block brut-card brut-card-hover p-5 sm:p-7',
        s.color,
        text,
        s.span,
        s.rowSpan ?? '',
        s.rotate ?? '',
      ].join(' ')}
      aria-label={`${s.title} case study`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="brut-chip !bg-white !text-ink">
          <span className="h-2 w-2 rounded-full bg-brutPink border-2 border-ink" aria-hidden />
          Case Study · {s.year}
        </span>
        <span className="inline-flex h-10 w-10 items-center justify-center border-3 border-ink bg-white text-ink group-hover:bg-brutYellow transition-colors">
          <ArrowUpRight size={20} strokeWidth={3} />
        </span>
      </div>

      <h3 className="mt-6 font-display text-3xl sm:text-5xl leading-[0.95] tracking-tight">
        {s.title}
      </h3>
      <p className={`mt-4 max-w-xl font-mono text-sm sm:text-base ${s.textInvert ? 'text-white/90' : 'text-ink/80'}`}>
        {s.subtitle}
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <ul className="flex flex-wrap gap-2">
          {s.tags.map((t) => (
            <li key={t} className="brut-chip !bg-white !text-ink">#{t}</li>
          ))}
        </ul>
        <span className={`font-mono text-xs uppercase tracking-widest ${s.textInvert ? 'text-white/80' : 'text-ink/60'}`}>
          {s.meta}
        </span>
      </div>
    </a>
  )
}

export default function CaseStudies() {
  return (
    <section id="work" className="mx-3 sm:mx-6 mt-16 sm:mt-24">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <span className="brut-sticker bg-brutPink text-white -rotate-1 text-xs sm:text-sm">
            Section 02
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl leading-none">
            WALL OF CASE STUDIES
          </h2>
          <p className="mt-3 max-w-xl font-mono text-sm sm:text-base opacity-80">
            Selected work from the last few years. Six in a grid, one thousand
            in a drawer. Tap any card for the full story.
          </p>
        </div>
        <a href="#" className="brut-btn !bg-white">
          Full archive <ArrowUpRight size={16} strokeWidth={3} />
        </a>
      </div>

      <div className="grid gap-6 lg:grid-cols-12 lg:auto-rows-[minmax(280px,auto)]">
        {studies.map((s) => (
          <Card key={s.title} s={s} />
        ))}
      </div>
    </section>
  )
}
