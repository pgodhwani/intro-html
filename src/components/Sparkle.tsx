type Props = {
  className?: string
  size?: number
  color?: string
}

export default function Sparkle({ className = '', size = 22, color = '#FFE6F5' }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden
      fill={color}
    >
      <path d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z" />
    </svg>
  )
}

export function Starfield({ count = 14 }: { count?: number }) {
  const stars = Array.from({ length: count }, (_, i) => {
    const size = 10 + ((i * 37) % 18)
    const top = (i * 53) % 100
    const left = (i * 31) % 100
    const delay = (i * 0.23) % 2.4
    const color = i % 3 === 0 ? '#ffffff' : i % 3 === 1 ? '#FFE6F5' : '#FFF6EA'
    return (
      <div
        key={i}
        className="absolute animate-sparkle"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          animationDelay: `${delay}s`,
        }}
      >
        <Sparkle size={size} color={color} />
      </div>
    )
  })
  return <div className="pointer-events-none absolute inset-0" aria-hidden>{stars}</div>
}
