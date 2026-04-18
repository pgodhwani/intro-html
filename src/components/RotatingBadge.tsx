type Props = {
  text: string
  size?: number
  className?: string
  fill?: string
  textColor?: string
  inner?: string
}

/** Circular badge with text-on-path that slowly rotates, like "ICE CREAM * ICE CREAM *" */
export default function RotatingBadge({
  text,
  size = 110,
  className = '',
  fill = '#FF5FA2',
  textColor = '#FFF6EA',
  inner,
}: Props) {
  const id = `path-${text.replace(/\W+/g, '-')}`
  const content = `${text} ★ ${text} ★ ${text} ★ `
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }} aria-hidden>
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="animate-spin-slow"
        style={{ filter: 'drop-shadow(2px 2px 0 rgba(74,14,46,0.25))' }}
      >
        <defs>
          <path
            id={id}
            d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
          />
        </defs>
        <circle cx="50" cy="50" r="46" fill={fill} stroke="#8C1E5C" strokeWidth="1" />
        <text
          fill={textColor}
          fontSize="9"
          fontFamily="DM Mono, monospace"
          letterSpacing="2.5"
          style={{ textTransform: 'uppercase' }}
        >
          <textPath href={`#${id}`}>{content}</textPath>
        </text>
      </svg>
      {inner && (
        <div className="absolute inset-0 grid place-items-center font-serifDisplay text-lg" style={{ color: textColor }}>
          {inner}
        </div>
      )}
    </div>
  )
}
