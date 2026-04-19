import { PixelStar } from './Pixel'

const skills = [
  { name: 'Napping.js', level: 99 },
  { name: 'Keyboard paws', level: 94 },
  { name: 'Design critique (loud)', level: 88 },
]

export default function VipCat() {
  return (
    <section
      id="vip"
      className="px-6 py-20 md:py-28"
      aria-labelledby="vip-title"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <span className="chip">The VIP</span>
          <h2
            id="vip-title"
            className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Meet{' '}
            <span className="font-sugar font-normal text-[color:var(--accent)]">
              Miso
            </span>
          </h2>
          <p className="mt-2 text-[color:var(--muted)]">
            Lead consultant. Pays rent in loaf.
          </p>
        </div>

        <article className="ticket ticket-hover mx-auto grid gap-6 px-8 py-10 md:grid-cols-[1fr_1.4fr] md:px-12 md:py-12">
          <div className="flex flex-col items-center justify-center gap-3">
            <PixelMiso />
            <span className="tag-green">Principal Mischief Officer</span>
          </div>

          <div className="flex flex-col justify-center gap-5">
            <p className="text-sm md:text-base text-[color:var(--ink)]/85">
              Miso is the quiet part of the team. He reviews mockups with a
              slow blink, naps exactly on the trackpad during standups, and has
              an uncanny sense for which Figma frame is the actual final.
            </p>

            <div className="flex flex-col gap-3">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="mb-1 flex items-center justify-between text-xs font-semibold">
                    <span>{s.name}</span>
                    <span className="pixel-label text-[color:var(--muted)]">
                      {s.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full border-1.5 border-[color:var(--line)] bg-[color:var(--page-bg)]">
                    <div
                      className="h-full rounded-full bg-[color:var(--accent)]"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-1 text-[color:var(--muted)]">
              <PixelStar size={10} color="var(--accent)" />
              <span className="pixel-label">ON CALL FOR CAT TAX ONLY</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

function PixelMiso() {
  const B = 'var(--ink)'
  const O = '#E8A86A'
  const W = '#FFFFFF'
  const P = 'var(--accent)'
  const pixels: Array<[number, number, string]> = [
    [2, 1, B], [3, 1, B], [6, 1, B], [7, 1, B],
    [2, 2, B], [3, 2, O], [4, 2, B], [5, 2, B], [6, 2, O], [7, 2, B],
    [1, 3, B], [2, 3, O], [3, 3, W], [4, 3, B], [5, 3, B], [6, 3, W], [7, 3, O], [8, 3, B],
    [1, 4, B], [2, 4, O], [3, 4, O], [4, 4, O], [5, 4, O], [6, 4, O], [7, 4, O], [8, 4, B],
    [1, 5, B], [2, 5, O], [3, 5, O], [4, 5, P], [5, 5, P], [6, 5, O], [7, 5, O], [8, 5, B],
    [2, 6, B], [3, 6, O], [4, 6, O], [5, 6, O], [6, 6, O], [7, 6, B],
    [3, 7, B], [4, 7, B], [5, 7, B], [6, 7, B],
  ]
  return (
    <div className="pixel-card p-3" style={{ borderRadius: 6 }} aria-hidden="true">
      <svg width="160" height="140" viewBox="0 0 10 9" shapeRendering="crispEdges">
        <rect x="0" y="0" width="10" height="9" fill="#F4F1FF" />
        {pixels.map(([x, y, c], i) => (
          <rect key={i} x={x} y={y} width="1" height="1" fill={c} />
        ))}
      </svg>
    </div>
  )
}
