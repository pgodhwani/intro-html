import { ArrowUpRight } from 'lucide-react'
import Sparkle from './Sparkle'

type CaseStudy = {
  title: string
  subtitle: string
  meta: string
  tags: string[]
  year: string
  tint: string // tailwind bg-class
  span: string
  rotate?: string
  variant?: 'ticket' | 'soft'
  stamp?: string
  href?: string
}

const studies: CaseStudy[] = [
  {
    title: 'MOONWAVE',
    subtitle: 'Identity system for a sleep-tech startup that finally grew up.',
    meta: 'Brand · Motion · Print',
    tags: ['Identity', 'Print', 'Motion'],
    year: '2026',
    tint: 'bg-cottonPink',
    span: 'lg:col-span-7',
    rotate: '-rotate-[0.4deg]',
    variant: 'ticket',
    stamp: 'NEW',
    href: '#',
  },
  {
    title: 'Kettle & Co.',
    subtitle: 'Heirloom-spice packaging in bubblegum & charcoal.',
    meta: 'Packaging · Illustration',
    tags: ['Pack', 'Illustration'],
    year: '2025',
    tint: 'bg-lilac/70',
    span: 'lg:col-span-5',
    rotate: 'rotate-[0.6deg]',
    variant: 'soft',
    href: '#',
  },
  {
    title: 'NORTH/SOUTH',
    subtitle: 'A 96-page riso zine about soft climate futures.',
    meta: 'Editorial · Typography',
    tags: ['Editorial', 'Riso'],
    year: '2025',
    tint: 'bg-skyCandy/70',
    span: 'lg:col-span-4',
    rotate: '-rotate-[0.3deg]',
    variant: 'ticket',
    href: '#',
  },
  {
    title: 'Paperpunk OS',
    subtitle: 'A pastel-punk design system for tiny teams. 42 candy-coated components.',
    meta: 'Product · Design System',
    tags: ['DesignSys', 'Figma', 'Tokens'],
    year: '2024',
    tint: 'bg-mint/80',
    span: 'lg:col-span-8',
    rotate: 'rotate-[0.2deg]',
    variant: 'soft',
    stamp: 'FAV',
    href: '#',
  },
  {
    title: 'Hello Friend',
    subtitle: 'Mental-health onboarding illustrations that feel like a soft hug.',
    meta: 'Illustration · Motion',
    tags: ['Illustration', 'Onboarding'],
    year: '2024',
    tint: 'bg-sunshine/70',
    span: 'lg:col-span-6',
    rotate: '-rotate-[0.6deg]',
    variant: 'soft',
    href: '#',
  },
  {
    title: 'OK Studio',
    subtitle: 'Micro-site for a type foundry. Variable fonts, maximum sugar.',
    meta: 'Web · Typography',
    tags: ['Web', 'Type'],
    year: '2023',
    tint: 'bg-cottonPink',
    span: 'lg:col-span-6',
    rotate: 'rotate-[0.4deg]',
    variant: 'ticket',
    href: '#',
  },
]

function Card({ s }: { s: CaseStudy }) {
  const base =
    s.variant === 'ticket'
      ? 'ticket ticket-hover'
      : 'soft-card soft-card-hover'
  return (
    <a
      href={s.href ?? '#'}
      className={[
        'group relative block p-6 sm:p-8',
        base,
        s.span,
        s.rotate ?? '',
      ].join(' ')}
      aria-label={`${s.title} case study`}
    >
      <div className={`absolute inset-3 ${s.variant === 'ticket' ? 'ticket-inner' : 'rounded-2xl border-1.5 border-plum/60 dark:border-star/70'} pointer-events-none`} aria-hidden />
      {/* subtle tinted wash */}
      <div className={`absolute inset-3 ${s.variant === 'ticket' ? 'rounded-[9px]' : 'rounded-2xl'} ${s.tint} opacity-60 pointer-events-none`} aria-hidden />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-bubblegum" aria-hidden />
              case · {s.year}
            </span>
            {s.stamp && (
              <span className="chip !bg-bubblegum !text-cream !border-plum animate-wiggle">
                <Sparkle size={10} color="#FFF6EA" /> {s.stamp}
              </span>
            )}
          </div>
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border-1.5 border-plum bg-cream text-inkRose group-hover:bg-bubblegum group-hover:text-cream transition-colors dark:bg-nightSoft dark:text-star dark:border-star">
            <ArrowUpRight size={20} strokeWidth={2.5} />
          </span>
        </div>

        <h3 className="mt-8 font-serifDisplay text-4xl sm:text-6xl leading-[0.9] tracking-tight">
          <span className="text-inkRose dark:text-star">{s.title.split(' ')[0]}</span>
          {s.title.split(' ').slice(1).length > 0 && (
            <span
              className="outlined-thick ml-2 sm:ml-3"
              style={{ ['--stroke' as string]: '#D6286F' }}
            >
              {s.title.split(' ').slice(1).join(' ')}
            </span>
          )}
        </h3>

        <p className="mt-4 max-w-xl font-sans text-sm sm:text-base text-inkRose/85 dark:text-star/85">
          {s.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <ul className="flex flex-wrap gap-2">
            {s.tags.map((t) => (
              <li key={t} className="chip">#{t}</li>
            ))}
          </ul>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-inkRose/60 dark:text-star/70">
            {s.meta}
          </span>
        </div>
      </div>
    </a>
  )
}

export default function CaseStudies() {
  return (
    <section id="work" className="mx-3 sm:mx-6 mt-20 sm:mt-28">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
        <div>
          <span className="chip !bg-bubblegum !text-cream">section · 02</span>
          <h2 className="mt-4 font-serifDisplay text-5xl sm:text-7xl leading-[0.9] text-rose dark:text-star">
            wall of <span className="outlined-thick" style={{ ['--stroke' as string]: 'var(--ink)' }}>case studies</span>
          </h2>
          <p className="mt-3 max-w-xl font-sans text-sm sm:text-base text-inkRose/80 dark:text-star/85">
            Selected work from the last few years. Six in the grid, a hundred
            more in a drawer. Tap any ticket for the full story.
          </p>
        </div>
        <a href="#" className="candy-btn !bg-cream !text-inkRose">
          Full archive <ArrowUpRight size={14} strokeWidth={2.5} />
        </a>
      </div>

      <div className="grid gap-8 lg:grid-cols-12 lg:auto-rows-[minmax(300px,auto)]">
        {studies.map((s) => (
          <Card key={s.title} s={s} />
        ))}
      </div>
    </section>
  )
}
