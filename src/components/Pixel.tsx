type PixelCloudProps = {
  className?: string
  size?: number
  fill?: string
  stroke?: string
}

export function PixelCloud({
  className,
  size = 64,
  fill = '#FFFFFF',
  stroke = '#15112B',
}: PixelCloudProps) {
  const w = size
  const h = Math.round(size * 0.62)
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 16 10"
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
    >
      <g fill={fill} stroke={stroke} strokeWidth="0.6">
        <rect x="3" y="4" width="2" height="2" />
        <rect x="5" y="2" width="2" height="2" />
        <rect x="7" y="3" width="2" height="2" />
        <rect x="9" y="2" width="2" height="2" />
        <rect x="11" y="4" width="2" height="2" />
        <rect x="2" y="6" width="2" height="2" />
        <rect x="4" y="6" width="2" height="2" />
        <rect x="6" y="5" width="2" height="2" />
        <rect x="8" y="5" width="2" height="2" />
        <rect x="10" y="6" width="2" height="2" />
        <rect x="12" y="6" width="2" height="2" />
      </g>
    </svg>
  )
}

type PixelStarProps = {
  className?: string
  size?: number
  color?: string
}

export function PixelStar({ className, size = 14, color = '#E8266A' }: PixelStarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 7 7"
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
    >
      <g fill={color}>
        <rect x="3" y="0" width="1" height="1" />
        <rect x="3" y="6" width="1" height="1" />
        <rect x="0" y="3" width="1" height="1" />
        <rect x="6" y="3" width="1" height="1" />
        <rect x="3" y="2" width="1" height="3" />
        <rect x="2" y="3" width="3" height="1" />
      </g>
    </svg>
  )
}

type PixelHeartProps = {
  className?: string
  size?: number
  color?: string
}

export function PixelHeart({ className, size = 14, color = '#E8266A' }: PixelHeartProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 7 7"
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
    >
      <g fill={color}>
        <rect x="1" y="1" width="2" height="1" />
        <rect x="4" y="1" width="2" height="1" />
        <rect x="0" y="2" width="7" height="1" />
        <rect x="1" y="3" width="5" height="1" />
        <rect x="2" y="4" width="3" height="1" />
        <rect x="3" y="5" width="1" height="1" />
      </g>
    </svg>
  )
}
