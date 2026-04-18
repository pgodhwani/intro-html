import type { ReactNode } from 'react'

type Props = {
  items: ReactNode[]
  reverse?: boolean
  className?: string
  separator?: ReactNode
  ariaLabel?: string
}

export default function Marquee({
  items,
  reverse = false,
  className = '',
  separator,
  ariaLabel,
}: Props) {
  const sep = separator ?? <span aria-hidden className="mx-6 text-xl">★</span>
  const Row = (
    <div className="flex shrink-0 items-center whitespace-nowrap">
      {items.map((it, i) => (
        <span key={i} className="flex items-center">
          {it}
          {sep}
        </span>
      ))}
    </div>
  )
  return (
    <div
      aria-label={ariaLabel}
      role={ariaLabel ? 'region' : undefined}
      className={`overflow-hidden ${className}`}
    >
      <div className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {Row}
        {Row}
      </div>
    </div>
  )
}
