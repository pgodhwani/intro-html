import { Mail, Camera, Palette, Hash, ArrowUpRight } from 'lucide-react'

const links = [
  { icon: Mail, label: 'hello@sandhya.studio', href: 'mailto:hello@sandhya.studio' },
  { icon: Camera, label: '@sandhya.draws', href: '#' },
  { icon: Palette, label: 'dribbble.com/sandhya', href: '#' },
  { icon: Hash, label: 'github.com/sandhya', href: '#' },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-3 sm:mx-6 mt-16 sm:mt-24 mb-10">
      <div className="brut-card p-6 sm:p-10 bg-brutYellow dark:bg-brutYellow dark:text-ink relative overflow-hidden">
        <div className="absolute inset-0 halftone opacity-20 pointer-events-none" aria-hidden />
        <div className="relative grid gap-8 lg:grid-cols-2 items-end">
          <div>
            <span className="brut-sticker bg-white -rotate-2 text-xs sm:text-sm">
              Say Hi
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl leading-[0.95]">
              HAVE A <span className="border-3 border-ink bg-white px-2">LOUD</span> IDEA?
              LET'S MAKE IT LOUDER.
            </h2>
            <p className="mt-4 font-mono max-w-md">
              Brand identity, editorial, illustration, odd little web toys —
              if it's weird and it matters, send it over.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="brut-card p-3 flex items-center gap-3 bg-white text-ink"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center border-3 border-ink bg-brutPink text-white">
                    <l.icon size={18} strokeWidth={3} />
                  </span>
                  <span className="font-mono text-sm sm:text-base flex-1 truncate">
                    {l.label}
                  </span>
                  <ArrowUpRight size={18} strokeWidth={3} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase opacity-80">
        <span>© 2026 Sandhya Siddarth · Built loud with React + Tailwind</span>
        <span>Miso, Principal Mischief Officer, approved this page.</span>
      </footer>
    </section>
  )
}
