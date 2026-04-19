import { PixelStar } from './Pixel'

type Art = {
  id: string
  title: string
  medium: string
  palette: [string, string, string]
}

const art: Art[] = [
  { id: 'a1', title: 'Soft systems', medium: 'Editorial illustration', palette: ['#FFD8E8', '#E8266A', '#15112B'] },
  { id: 'a2', title: 'Desk calm', medium: 'Pixel study', palette: ['#D6E9F7', '#6B3BFF', '#0B2E4A'] },
  { id: 'a3', title: 'Neon chai', medium: 'Poster', palette: ['#FFF5C2', '#E8266A', '#3A240A'] },
  { id: 'a4', title: 'Cloud logic', medium: 'Pattern', palette: ['#ECE7FF', '#6B3BFF', '#15112B'] },
  { id: 'a5', title: 'Soft kitten', medium: 'Sticker pack', palette: ['#FFE0A8', '#E8266A', '#3A240A'] },
  { id: 'a6', title: 'Quiet grid', medium: 'Risograph', palette: ['#D5E6C4', '#3F5E32', '#15112B'] },
]

export default function Playground() {
  return (
    <section id="play" className="px-6 py-20 md:py-28" aria-labelledby="play-title">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="chip">Playground</span>
            <h2
              id="play-title"
              className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight"
            >
              Side{' '}
              <span className="font-sugar font-normal text-[color:var(--accent)]">
                quests
              </span>
            </h2>
            <p className="mt-2 max-w-md text-[color:var(--muted)]">
              The pixels, posters and patterns I make on weekends to keep my
              eyes fresh.
            </p>
          </div>
          <div className="flex items-center gap-2 text-[color:var(--muted)]">
            <PixelStar size={10} color="var(--purple)" />
            <span className="pixel-label">SWIPE ←→</span>
          </div>
        </div>

        <div className="candy-scroll -mx-6 overflow-x-auto pb-6">
          <ul
            role="list"
            className="flex min-w-max gap-5 px-6"
            aria-label="Side projects and artworks"
          >
            {art.map((a) => (
              <li key={a.id}>
                <ArtCard art={a} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function ArtCard({ art }: { art: Art }) {
  const [bg, accent, ink] = art.palette
  return (
    <article className="soft-card soft-card-hover w-[260px] overflow-hidden">
      <div
        className="relative h-40 border-b-1.5 border-[color:var(--line)]"
        style={{ background: bg }}
      >
        <svg viewBox="0 0 16 10" className="absolute inset-0 h-full w-full" shapeRendering="crispEdges" aria-hidden="true">
          {Array.from({ length: 14 }).map((_, i) => (
            <rect key={i} x={(i * 3) % 16} y={(i * 2) % 10} width="1" height="1" fill={accent} opacity="0.45" />
          ))}
          <rect x="5" y="3" width="6" height="4" fill="#FFFFFF" stroke={ink} strokeWidth="0.3" />
          <rect x="6" y="4" width="1" height="1" fill={accent} />
          <rect x="9" y="4" width="1" height="1" fill={accent} />
          <rect x="7" y="5" width="2" height="1" fill={ink} />
        </svg>
      </div>
      <div className="flex items-center justify-between p-4">
        <div>
          <p className="text-base font-bold leading-tight">{art.title}</p>
          <p className="pixel-label mt-0.5 text-[color:var(--muted)]">
            {art.medium.toUpperCase()}
          </p>
        </div>
        <span className="tag-pill">&rarr;</span>
      </div>
    </article>
  )
}
