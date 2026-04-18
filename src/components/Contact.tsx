import { Mail, Camera, Palette, Hash, ArrowUpRight } from 'lucide-react'
import { Starfield } from './Sparkle'

const links = [
  { icon: Mail, label: 'hello@priyanka.studio', href: 'mailto:hello@priyanka.studio' },
  { icon: Camera, label: '@priyanka.draws', href: '#' },
  { icon: Palette, label: 'dribbble.com/priyanka', href: '#' },
  { icon: Hash, label: 'github.com/priyanka', href: '#' },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-3 sm:mx-6 mt-20 sm:mt-28 mb-10">
      <div className="relative soft-card p-8 sm:p-12 cloud-bg overflow-hidden">
        <Starfield count={16} />
        <div className="relative grid gap-8 lg:grid-cols-2 items-end">
          <div>
            <span className="chip !bg-bubblegum !text-cream">say hi</span>
            <h2 className="mt-4 font-serifDisplay text-5xl sm:text-7xl leading-[0.9]">
              <span className="text-rose dark:text-star">have a</span>{' '}
              <span className="font-sugar text-rose dark:text-star text-5xl sm:text-7xl">sweet</span>{' '}
              <span className="outlined-thick" style={{ ['--stroke' as string]: 'var(--ink)' }}>idea</span>?
            </h2>
            <p className="mt-4 font-sans text-inkRose/85 dark:text-star/85 max-w-md">
              Brand identity, editorial, illustration, odd little web toys —
              if it's soft and it matters, send it over.
            </p>
            <p className="mt-3 font-hand text-2xl -rotate-2 text-rose dark:text-star">
              ps. I reply with actual stickers ♡
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="soft-card soft-card-hover p-3 flex items-center gap-3"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-1.5 border-plum dark:border-star bg-bubblegum text-cream">
                    <l.icon size={16} strokeWidth={2.5} />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.14em] flex-1 truncate">
                    {l.label}
                  </span>
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="mt-6 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-inkRose/60 dark:text-star/70">
        <span>© 2026 Priyanka Godhwani · built soft with react + tailwind</span>
        <span>miso, p.m.o., approved this page ♡</span>
      </footer>
    </section>
  )
}
