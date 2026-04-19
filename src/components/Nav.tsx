import { Moon, Sun } from 'lucide-react'
import { PixelStar } from './Pixel'

type Props = {
  isDark: boolean
  onToggleDark: () => void
}

export default function Nav({ isDark, onToggleDark }: Props) {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Work' },
    { href: '#play', label: 'Play' },
    { href: '#vip', label: 'The VIP' },
    { href: '#say-hi', label: 'Say hi' },
  ]
  return (
    <header className="sticky top-4 z-50 mx-3 sm:mx-6">
      <nav
        aria-label="Primary"
        className="soft-card flex items-center justify-between px-4 py-2"
        style={{ borderRadius: 999 }}
      >
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-1.5 border-[color:var(--line)] bg-[color:var(--accent)]">
            <PixelStar size={12} color="#FFFFFF" />
          </span>
          <span className="font-sugar text-2xl text-[color:var(--accent)] leading-none">
            priyanka
          </span>
          <span className="font-semibold text-sm -ml-0.5 text-[color:var(--ink)]">
            .g
          </span>
        </a>
        <ul className="hidden items-center gap-0.5 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[color:var(--ink)]/75 hover:bg-[color:var(--page-bg)] hover:text-[color:var(--ink)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={onToggleDark}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-pressed={isDark}
          className="candy-btn !py-1.5 !px-3 !text-xs"
        >
          {isDark ? <Sun size={14} strokeWidth={2.5} /> : <Moon size={14} strokeWidth={2.5} />}
          <span className="hidden sm:inline">{isDark ? 'Day' : 'Night'}</span>
        </button>
      </nav>
    </header>
  )
}
