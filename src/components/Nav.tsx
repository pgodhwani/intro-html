import { Moon, Sun, Sparkles } from 'lucide-react'

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
        className="soft-card flex items-center justify-between px-4 py-2"
        style={{ borderRadius: 999 }}
      >
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-1.5 border-plum bg-bubblegum text-cream">
            <Sparkles size={16} strokeWidth={2.5} aria-hidden />
          </span>
          <span className="font-sugar text-2xl text-rose dark:text-star leading-none">priyanka</span>
          <span className="font-serifDisplay text-lg -ml-1 text-inkRose dark:text-star">.g</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-inkRose/80 hover:bg-cottonPink hover:text-inkRose dark:text-star/80 dark:hover:bg-nightSoft dark:hover:text-star"
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
          className="candy-btn !py-2 !px-3 !text-xs"
        >
          {isDark ? <Sun size={16} strokeWidth={2.5} /> : <Moon size={16} strokeWidth={2.5} />}
          <span className="hidden sm:inline">{isDark ? 'Day' : 'Night'}</span>
        </button>
      </nav>
    </header>
  )
}
