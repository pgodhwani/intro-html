import { PixelHeart, PixelStar } from './Pixel'

const toolBelt = [
  'Figma',
  'FigJam',
  'Framer',
  'Notion',
  'Miro',
  'ProtoPie',
  'Principle',
  'Webflow',
]

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-20 md:py-28"
      aria-labelledby="about-title"
    >
      <div className="mx-auto grid w-full max-w-5xl gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div className="flex flex-col items-start gap-5">
          <span className="chip">About</span>
          <PixelAvatar />
          <div className="flex items-center gap-2 text-[color:var(--muted)]">
            <PixelHeart size={12} color="var(--accent)" />
            <span className="pixel-label">Mumbai · chai · pixels</span>
          </div>
        </div>

        <div>
          <h2
            id="about-title"
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            Designing for businesses that drive impact through{' '}
            <span className="font-sugar text-[color:var(--accent)] font-normal">
              design thinking
            </span>
            .
          </h2>

          <div className="mt-6 space-y-4 text-[15px] md:text-base text-[color:var(--ink)]/85 leading-relaxed">
            <p>
              I&rsquo;m Priyanka — a product designer with 5+ years of turning
              messy, ambitious problems into clear, calm interfaces. My work
              lives at the intersection of SaaS, fintech and operational tools
              where every pixel has to carry weight.
            </p>
            <p>
              I&rsquo;ve partnered with enterprise and early-stage teams
              (Verizon, xto10x, Dell, UrbanPiper, IndusInd Bank) to ship design
              systems, AI-assisted tooling, point-of-sale experiences and
              premium consumer products — usually while sneaking in a little
              sugar wherever the brief allows.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {toolBelt.map((t) => (
              <span key={t} className="tag-pill">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-[color:var(--muted)]">
            <PixelStar size={10} color="var(--purple)" />
            <span className="pixel-label">
              CURRENTLY TAKING ON SELECT PRODUCT WORK · 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function PixelAvatar() {
  const P = 'var(--accent)'
  const D = 'var(--ink)'
  const L = '#FFD8E8'
  const W = '#FFFFFF'
  const G = '#C9B6FF'
  const pixels: Array<[number, number, string]> = [
    [3, 0, D], [4, 0, D], [5, 0, D], [6, 0, D],
    [2, 1, D], [3, 1, L], [4, 1, L], [5, 1, L], [6, 1, L], [7, 1, D],
    [2, 2, D], [3, 2, L], [4, 2, W], [5, 2, L], [6, 2, W], [7, 2, L], [8, 2, D],
    [2, 3, D], [3, 3, L], [4, 3, D], [5, 3, L], [6, 3, D], [7, 3, L], [8, 3, D],
    [2, 4, D], [3, 4, L], [4, 4, L], [5, 4, P], [6, 4, L], [7, 4, L], [8, 4, D],
    [3, 5, D], [4, 5, L], [5, 5, L], [6, 5, L], [7, 5, D],
    [4, 6, D], [5, 6, D], [6, 6, D],
    [3, 7, G], [4, 7, G], [5, 7, G], [6, 7, G], [7, 7, G],
    [2, 8, G], [3, 8, G], [4, 8, G], [5, 8, G], [6, 8, G], [7, 8, G], [8, 8, G],
    [2, 9, G], [3, 9, G], [5, 9, W], [7, 9, G], [8, 9, G],
  ]
  return (
    <div
      className="pixel-card-hover pixel-card p-3"
      style={{ borderRadius: 6 }}
      aria-hidden="true"
    >
      <svg width="140" height="140" viewBox="0 0 11 10" shapeRendering="crispEdges">
        <rect x="0" y="0" width="11" height="10" fill="#F4F1FF" />
        {pixels.map(([x, y, c], i) => (
          <rect key={i} x={x} y={y} width="1" height="1" fill={c} />
        ))}
      </svg>
    </div>
  )
}
