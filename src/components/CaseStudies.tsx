import { ArrowUpRight, Lock } from 'lucide-react'
import { PixelStar } from './Pixel'

type Study = {
  id: string
  company: string
  title: string
  scriptAccent: string
  year: string
  role: string
  tags: string[]
  blurb: string
  palette: { bg: string; ink: string; accent: string }
  nda?: boolean
  thumb: 'verizon' | 'xto10x' | 'dell' | 'urbanpiper' | 'indusind'
}

const studies: Study[] = [
  {
    id: 'verizon',
    company: 'Verizon',
    title: 'Scaling point-of-sale for',
    scriptAccent: 'enterprise retail',
    year: '2023',
    role: 'Senior Product Designer',
    tags: ['POS', 'Design strategy', 'Enterprise'],
    blurb:
      'Re-architecting the in-store transaction flow for thousands of retail associates across North America.',
    palette: { bg: '#0B1E3A', ink: '#FFFFFF', accent: '#E8266A' },
    nda: true,
    thumb: 'verizon',
  },
  {
    id: 'xto10x',
    company: 'xto10x',
    title: 'xto10x-ing your company&rsquo;s',
    scriptAccent: 'people health',
    year: '2022',
    role: 'Product Designer',
    tags: ['HR SaaS', '0 → 1'],
    blurb:
      'Designing a pulse and OKR engine that helps startups diagnose culture the way engineers diagnose systems.',
    palette: { bg: '#FFF5C2', ink: '#15112B', accent: '#E8266A' },
    thumb: 'xto10x',
  },
  {
    id: 'dell-ncd',
    company: 'Dell × NCD',
    title: 'Integrating AI with',
    scriptAccent: 'healthcare triage',
    year: '2024',
    role: 'Lead Product Designer',
    tags: ['Social impact', 'AI', 'Healthcare'],
    blurb:
      'An AI-assisted workflow for frontline health workers screening for non-communicable diseases in rural India.',
    palette: { bg: '#D6E9F7', ink: '#0B2E4A', accent: '#6B3BFF' },
    thumb: 'dell',
  },
  {
    id: 'urbanpiper',
    company: 'UrbanPiper',
    title: 'Planning restaurants&rsquo;',
    scriptAccent: 'growth, calmly',
    year: '2023',
    role: 'Product Designer',
    tags: ['SaaS', 'POS'],
    blurb:
      'A planner surface that tames 20+ aggregator feeds into one honest view of a restaurant&rsquo;s day.',
    palette: { bg: '#FFE0A8', ink: '#3A240A', accent: '#E8266A' },
    nda: true,
    thumb: 'urbanpiper',
  },
  {
    id: 'indusind',
    company: 'IndusInd Bank',
    title: 'Experience premium',
    scriptAccent: 'credit cards',
    year: '2025',
    role: 'Senior Product Designer',
    tags: ['Fintech', 'Consumer'],
    blurb:
      'Rebuilding the onboarding and rewards journey for IndusInd&rsquo;s flagship credit-card portfolio.',
    palette: { bg: '#F3E6FF', ink: '#2A0E4A', accent: '#6B3BFF' },
    thumb: 'indusind',
  },
]

export default function CaseStudies() {
  return (
    <section id="work" className="px-6 py-20 md:py-28" aria-labelledby="work-title">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="chip">Selected work · 2022 — 2026</span>
            <h2
              id="work-title"
              className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight"
            >
              Case{' '}
              <span className="font-sugar font-normal text-[color:var(--accent)]">
                studies
              </span>
            </h2>
            <p className="mt-2 max-w-md text-[color:var(--muted)]">
              Five long-running partnerships — from enterprise POS to fintech,
              HR, AI health and restaurant ops.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[color:var(--muted)]">
            <PixelStar size={10} color="var(--accent)" />
            <span className="pixel-label">SCROLL / READ / RECLINE</span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {studies.map((s, i) => (
            <StudyCard key={s.id} study={s} wide={i === 2} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StudyCard({ study, wide }: { study: Study; wide?: boolean }) {
  const { palette } = study
  return (
    <article
      className={`soft-card soft-card-hover flex flex-col overflow-hidden ${
        wide ? 'md:col-span-2' : ''
      }`}
    >
      <div
        className="relative border-b-1.5 border-[color:var(--line)]"
        style={{ background: palette.bg, color: palette.ink }}
      >
        <div className="flex items-center justify-between px-6 pt-5 text-[11px] font-semibold uppercase tracking-[0.18em]">
          <span>{study.company}</span>
          <span>{study.year}</span>
        </div>

        <div className={`px-6 ${wide ? 'py-10' : 'py-8'} flex justify-center`}>
          <Thumb kind={study.thumb} palette={palette} wide={wide} />
        </div>

        {study.nda && (
          <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[color:var(--ink)]">
            <Lock size={10} strokeWidth={2.5} />
            NDA
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
        <div className="flex flex-wrap gap-2">
          {study.tags.map((t) => (
            <span key={t} className="tag-green">
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-2xl md:text-[28px] font-bold leading-tight">
          <span dangerouslySetInnerHTML={{ __html: study.title }} />{' '}
          <span className="font-sugar font-normal text-[color:var(--accent)]">
            {study.scriptAccent}
          </span>
          .
        </h3>

        <p className="text-sm md:text-[15px] text-[color:var(--ink)]/80 leading-relaxed">
          <span dangerouslySetInnerHTML={{ __html: study.blurb }} />
        </p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="pixel-label text-[color:var(--muted)]">
            {study.role.toUpperCase()}
          </span>
          <a
            href="#say-hi"
            className="inline-flex items-center gap-1 text-sm font-semibold hover:text-[color:var(--accent)]"
          >
            {study.nda ? 'Connect to view' : 'View case study'}
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </article>
  )
}

function Thumb({
  kind,
  palette,
  wide,
}: {
  kind: Study['thumb']
  palette: { bg: string; ink: string; accent: string }
  wide?: boolean
}) {
  const height = wide ? 170 : 140
  const width = wide ? 520 : 360
  const common = {
    width,
    height,
    viewBox: `0 0 ${width} ${height}`,
    shapeRendering: 'crispEdges' as const,
  }

  if (kind === 'verizon') {
    return (
      <svg {...common} role="img" aria-label="Verizon POS thumbnail">
        <rect x="0" y="0" width={width} height={height} fill={palette.bg} />
        <g stroke="#fff" strokeOpacity="0.2" strokeWidth="1">
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={i} x1={0} x2={width} y1={(i + 1) * (height / 9)} y2={(i + 1) * (height / 9)} />
          ))}
        </g>
        <rect x={width / 2 - 90} y={height / 2 - 28} width={180} height={56} fill="#fff" rx="4" />
        <text
          x={width / 2}
          y={height / 2 + 8}
          textAnchor="middle"
          fontFamily="Plus Jakarta Sans"
          fontWeight="800"
          fontSize="22"
          fill={palette.accent}
        >
          verizon
        </text>
        <rect x={16} y={height - 28} width={80} height={14} fill={palette.accent} />
      </svg>
    )
  }

  if (kind === 'xto10x') {
    return (
      <svg {...common} role="img" aria-label="xto10x dashboard thumbnail">
        <rect x="0" y="0" width={width} height={height} fill={palette.bg} />
        <g fill={palette.ink}>
          <rect x="20" y="20" width="140" height="10" rx="2" />
          <rect x="20" y="36" width="90" height="6" rx="2" opacity="0.5" />
        </g>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect
              x={20 + i * 80}
              y={60}
              width="64"
              height={height - 80}
              fill="#FFFFFF"
              stroke={palette.ink}
              strokeWidth="1"
              rx="3"
            />
            <rect
              x={20 + i * 80 + 8}
              y={height - 30 - (i + 1) * 14}
              width="48"
              height={(i + 1) * 14}
              fill={palette.accent}
            />
          </g>
        ))}
      </svg>
    )
  }

  if (kind === 'dell') {
    return (
      <svg {...common} role="img" aria-label="Dell NCD AI healthcare thumbnail">
        <rect x="0" y="0" width={width} height={height} fill={palette.bg} />
        <rect x="20" y="20" width={width - 40} height={height - 40} fill="#FFFFFF" stroke={palette.ink} strokeWidth="1.5" rx="6" />
        <circle cx={width / 2 - 80} cy={height / 2} r="34" fill="#E9E1FF" stroke={palette.ink} strokeWidth="1.5" />
        <circle cx={width / 2 - 80} cy={height / 2} r="18" fill={palette.accent} />
        <g fill={palette.ink}>
          <rect x={width / 2 - 20} y={height / 2 - 26} width="140" height="8" rx="2" />
          <rect x={width / 2 - 20} y={height / 2 - 10} width="110" height="6" rx="2" opacity="0.5" />
          <rect x={width / 2 - 20} y={height / 2 + 4} width="130" height="6" rx="2" opacity="0.5" />
          <rect x={width / 2 - 20} y={height / 2 + 18} width="80" height="6" rx="2" opacity="0.5" />
        </g>
      </svg>
    )
  }

  if (kind === 'urbanpiper') {
    return (
      <svg {...common} role="img" aria-label="UrbanPiper planner thumbnail">
        <rect x="0" y="0" width={width} height={height} fill={palette.bg} />
        <g>
          {Array.from({ length: 6 }).map((_, c) =>
            Array.from({ length: 3 }).map((_, r) => (
              <rect
                key={`${c}-${r}`}
                x={20 + c * 54}
                y={24 + r * 28}
                width="46"
                height="22"
                fill={(c + r) % 2 === 0 ? '#FFFFFF' : '#FFEFD2'}
                stroke={palette.ink}
                strokeWidth="1"
                rx="3"
              />
            ))
          )}
        </g>
        <rect x={100} y={32} width={48} height={12} fill={palette.accent} />
        <rect x={208} y={60} width={100} height={12} fill={palette.accent} opacity="0.7" />
      </svg>
    )
  }

  return (
    <svg {...common} role="img" aria-label="IndusInd credit card thumbnail">
      <rect x="0" y="0" width={width} height={height} fill={palette.bg} />
      <g transform={`translate(${width / 2 - 110}, ${height / 2 - 60}) rotate(-6 110 60)`}>
        <rect width="220" height="120" rx="10" fill={palette.accent} />
        <rect x="14" y="18" width="40" height="14" rx="3" fill="#FFD87A" />
        <rect x="14" y="82" width="140" height="8" rx="2" fill="#FFFFFF" opacity="0.85" />
        <rect x="14" y="96" width="90" height="6" rx="2" fill="#FFFFFF" opacity="0.6" />
        <text x="176" y="32" fontFamily="Plus Jakarta Sans" fontSize="14" fontWeight="800" fill="#FFFFFF">
          IND
        </text>
      </g>
      <g transform={`translate(${width / 2 - 70}, ${height / 2 - 40}) rotate(6 70 40)`}>
        <rect width="180" height="100" rx="10" fill="#FFFFFF" stroke={palette.ink} strokeWidth="1.5" />
        <rect x="14" y="14" width="30" height="10" rx="2" fill={palette.accent} />
        <rect x="14" y="68" width="110" height="6" rx="2" fill={palette.ink} opacity="0.6" />
        <rect x="14" y="80" width="70" height="5" rx="2" fill={palette.ink} opacity="0.4" />
      </g>
    </svg>
  )
}
