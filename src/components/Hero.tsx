import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { MouseEvent } from 'react'

const PERIWINKLE = '#B9B6EF'
const PERIWINKLE_DEEP = '#8886DD'
const INK_BLUE = '#2E2A6B'

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 18, mass: 0.6 })
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 18, mass: 0.6 })

  const cloudsBackX = useTransform(smoothX, (v) => -v * 22)
  const cloudsBackY = useTransform(smoothY, (v) => -v * 10)
  const cloudsFrontX = useTransform(smoothX, (v) => -v * 44)
  const cloudsFrontY = useTransform(smoothY, (v) => -v * 18)
  const ticketX = useTransform(smoothX, (v) => v * 10)
  const ticketY = useTransform(smoothY, (v) => v * 6)

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden"
      style={{ background: PERIWINKLE, minHeight: '88vh' }}
      aria-labelledby="hero-title"
    >
      <div className="relative z-20 flex min-h-[70vh] items-center justify-center px-6 pt-10 md:pt-16">
        <motion.div
          className="w-full max-w-[820px]"
          style={{ x: ticketX, y: ticketY }}
        >
          <ScallopedTicket />
        </motion.div>
      </div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
        style={{ x: cloudsBackX, y: cloudsBackY }}
      >
        <PixelCloudsBack />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
        style={{ x: cloudsFrontX, y: cloudsFrontY }}
      >
        <PixelCloudsFront />
      </motion.div>

      <h1 id="hero-title" className="sr-only">
        Priyanka Godhwani — Product Designer
      </h1>
    </section>
  )
}

function ScallopedTicket() {
  const W = 820
  const H = 440
  const Rc = 26
  const R = 16
  const notches = 8
  const zoneStart = Rc + R + 6
  const zoneEnd = H - Rc - R - 6
  const spacing = (zoneEnd - zoneStart) / notches
  const centers = Array.from(
    { length: notches },
    (_, i) => zoneStart + spacing * (i + 0.5)
  )

  let d = `M ${Rc} 0 L ${W - Rc} 0 A ${Rc} ${Rc} 0 0 1 ${W} ${Rc}`
  for (const cy of centers) {
    d += ` L ${W} ${cy - R} A ${R} ${R} 0 0 0 ${W} ${cy + R}`
  }
  d += ` L ${W} ${H - Rc} A ${Rc} ${Rc} 0 0 1 ${W - Rc} ${H} L ${Rc} ${H} A ${Rc} ${Rc} 0 0 1 0 ${H - Rc}`
  for (let i = centers.length - 1; i >= 0; i--) {
    const cy = centers[i]
    d += ` L 0 ${cy + R} A ${R} ${R} 0 0 1 0 ${cy - R}`
  }
  d += ` L 0 ${Rc} A ${Rc} ${Rc} 0 0 1 ${Rc} 0 Z`

  return (
    <div className="relative drop-shadow-[6px_8px_0_rgba(46,42,107,0.18)]">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="block w-full h-auto"
        role="img"
        aria-label="Priyanka Godhwani, product designer"
      >
        <defs>
          <linearGradient id="ticketShade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#F2EFFF" />
          </linearGradient>
        </defs>
        <path d={d} fill="url(#ticketShade)" />
        <rect
          x="36"
          y="30"
          width={W - 72}
          height={H - 60}
          rx="18"
          ry="18"
          fill="none"
          stroke={INK_BLUE}
          strokeOpacity="0.55"
          strokeWidth="1.2"
        />
        <text
          x={W / 2}
          y={H / 2 - 10}
          textAnchor="middle"
          fontFamily="Lobster, cursive"
          fontSize="120"
          fill="#E8266A"
        >
          Priyanka
        </text>
        <text
          x={W / 2 + 30}
          y={H / 2 + 110}
          textAnchor="middle"
          fontFamily="Lobster, cursive"
          fontSize="120"
          fill="#E8266A"
        >
          Godhwani
        </text>
      </svg>

      <div
        className="absolute"
        style={{
          left: '12%',
          bottom: '-6%',
          transform: 'rotate(-14deg)',
        }}
      >
        <div
          className="flex items-center justify-center text-center font-semibold tracking-[0.18em] leading-[1.05]"
          style={{
            width: 118,
            height: 78,
            borderRadius: '50%',
            border: `1.2px solid ${INK_BLUE}55`,
            background: '#F2EFFF',
            color: '#E8266A',
            fontSize: 12,
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            boxShadow: '3px 4px 0 rgba(46,42,107,0.14)',
          }}
        >
          PRODUCT<br />DESIGNER
        </div>
      </div>
    </div>
  )
}

type Cell = [number, number, string]

function cloudBlob(
  ox: number,
  oy: number,
  grid: string[],
  map: Record<string, string>
): Cell[] {
  const cells: Cell[] = []
  grid.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const ch = row[x]
      if (ch !== ' ' && map[ch]) {
        cells.push([ox + x, oy + y, map[ch]])
      }
    }
  })
  return cells
}

const W_CLOUD = '#FFFFFF'
const L_CLOUD = '#DCD9F5'
const M_CLOUD = '#8C89D8'
const D_CLOUD = '#4E4AA8'

function PixelCloudsBack() {
  const grid: Cell[] = [
    ...cloudBlob(
      2,
      3,
      [
        '   WWWWWW    ',
        '  WWWWWWWW   ',
        ' WWWWWWWWWW  ',
        ' WWWWWWWWWW  ',
        '  LLLLLLLL   ',
        '   MMMMMM    ',
      ],
      { W: W_CLOUD, L: L_CLOUD, M: M_CLOUD }
    ),
    ...cloudBlob(
      14,
      5,
      [
        '  WWWW   ',
        ' WWWWWW  ',
        ' WWWWWW  ',
        '  LLLL   ',
      ],
      { W: W_CLOUD, L: L_CLOUD }
    ),
    ...cloudBlob(
      22,
      2,
      [
        '    WWW    ',
        '  WWWWWWW  ',
        ' WWWWWWWWW ',
        '  WWWWWWW  ',
        '   LLLLL   ',
        '    MMM    ',
      ],
      { W: W_CLOUD, L: L_CLOUD, M: M_CLOUD }
    ),
    ...cloudBlob(
      34,
      4,
      [
        '  WWW   ',
        ' WWWWW  ',
        ' WWWWW  ',
        '  MMM   ',
      ],
      { W: W_CLOUD, M: M_CLOUD }
    ),
    ...cloudBlob(
      42,
      2,
      [
        '   WWWW    ',
        '  WWWWWW   ',
        ' WWWWWWWW  ',
        ' WWWWWWWW  ',
        '  LLLLLL   ',
        '   DDDD    ',
      ],
      { W: W_CLOUD, L: L_CLOUD, D: D_CLOUD }
    ),
  ]
  return <PixelCloudSvg cells={grid} cols={56} rows={12} />
}

function PixelCloudsFront() {
  const grid: Cell[] = [
    ...cloudBlob(
      0,
      6,
      [
        '  WWWWWWWWW   ',
        ' WWWWWWWWWWW  ',
        'WWWWWWWWWWWWW ',
        'WWWWWWWWWWWWW ',
        ' LLLLLLLLLLL  ',
        '  MMMMMMMMM   ',
        '   DDDDDDD    ',
      ],
      { W: W_CLOUD, L: L_CLOUD, M: M_CLOUD, D: D_CLOUD }
    ),
    ...cloudBlob(
      16,
      9,
      [
        '  WWWWW   ',
        ' WWWWWWW  ',
        ' WWWWWWW  ',
        '  DDDDD   ',
      ],
      { W: W_CLOUD, D: D_CLOUD }
    ),
    ...cloudBlob(
      26,
      5,
      [
        '    WWW      ',
        '   WWWWW     ',
        '  WWWWWWW    ',
        ' WWWWWWWWW   ',
        ' WWWWWWWWW   ',
        '  LLLLLLL    ',
        '   MMMMM     ',
        '    DDD      ',
      ],
      { W: W_CLOUD, L: L_CLOUD, M: M_CLOUD, D: D_CLOUD }
    ),
    ...cloudBlob(
      40,
      7,
      [
        '  WWWWWWWWW    ',
        ' WWWWWWWWWWW   ',
        'WWWWWWWWWWWWW  ',
        ' LLLLLLLLLLL   ',
        '  MMMMMMMMM    ',
        '   DDDDDDD     ',
      ],
      { W: W_CLOUD, L: L_CLOUD, M: M_CLOUD, D: D_CLOUD }
    ),
  ]

  const sparkles: Cell[] = [
    [12, 4, W_CLOUD],
    [11, 5, W_CLOUD],
    [13, 5, W_CLOUD],
    [12, 6, W_CLOUD],
    [35, 2, W_CLOUD],
    [34, 3, W_CLOUD],
    [36, 3, W_CLOUD],
    [35, 4, W_CLOUD],
    [48, 3, W_CLOUD],
    [47, 4, W_CLOUD],
    [49, 4, W_CLOUD],
    [48, 5, W_CLOUD],
  ]

  return <PixelCloudSvg cells={[...sparkles, ...grid]} cols={56} rows={18} />
}

function PixelCloudSvg({
  cells,
  cols,
  rows,
}: {
  cells: Cell[]
  cols: number
  rows: number
}) {
  return (
    <svg
      viewBox={`0 0 ${cols} ${rows}`}
      className="block w-full"
      shapeRendering="crispEdges"
      preserveAspectRatio="none"
      style={{ height: 'auto' }}
    >
      {cells.map(([x, y, color], i) => (
        <rect key={i} x={x} y={y} width="1" height="1" fill={color} />
      ))}
    </svg>
  )
}

export { PERIWINKLE, PERIWINKLE_DEEP };
