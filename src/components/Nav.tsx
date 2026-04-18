import { Moon, Sun, Zap } from 'lucide-react'

type Props = {
  isDark: boolean
  onToggleDark: () => void
}

export default function Nav({ isDark, onToggleDark }: Props) {
  const links = [
    { href: '#work', label: 'Work' },
    { href: '#play', label: 'Play' },
    { href: '#vip', label: 'The VIP' },
    { href: '#contact', label: 'Say Hi' },
  ]
  return (
    <header className="sticky top-4 z-50 mx-3 sm:mx-6">
      <nav
        aria-label="Primary"
        className="brut-card flex items-center justify-between px-4 py-3"
      >
        <a href="#top" className="flex items-center gap-2 font-display text-lg sm:text-xl">
          <span className="inline-flex h-8 w-8 items-center justify-center border-3 border-ink bg-brutYellow dark:border-paper">
            <Zap size={18} strokeWidth={3} aria-hidden />
          </span>
          <span className="tracking-tight">SANDHYA/S</span>
        </a>
        <ul className="hidden items-center gap-2 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-sm uppercase px-3 py-1 border-3 border-transparent hover:border-ink hover:bg-brutYellow dark:hover:border-paper"
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
          className="brut-btn !py-2 !px-3"
        >
          {isDark ? <Sun size={18} strokeWidth={3} /> : <Moon size={18} strokeWidth={3} />}
          <span className="hidden sm:inline text-sm">{isDark ? 'Light' : 'Dark'}</span>
        </button>
      </nav>
    </header>
  )
}
