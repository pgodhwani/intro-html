import { Mail, ArrowUpRight } from 'lucide-react'
import { PixelCloud, PixelStar } from './Pixel'

const links = [
  { label: 'Email', value: 'hello@priyanka.design', href: 'mailto:hello@priyanka.design' },
  { label: 'LinkedIn', value: 'in/priyankagodhwani', href: '#' },
  { label: 'Read.cv', value: 'read.cv/priyankagodhwani', href: '#' },
  { label: 'Dribbble', value: 'dribbble.com/priyankag', href: '#' },
]

export default function Contact() {
  return (
    <section id="say-hi" className="px-6 py-24 md:py-32" aria-labelledby="contact-title">
      <div className="mx-auto max-w-4xl">
        <div
          className="soft-card relative overflow-hidden px-8 py-14 md:px-16 md:py-20"
          style={{ background: '#F4F1FF' }}
        >
          <div className="absolute -right-4 top-6 hidden md:block">
            <PixelCloud size={64} fill="#FFFFFF" stroke="var(--line)" />
          </div>
          <div className="absolute left-6 bottom-6 hidden md:block">
            <PixelCloud size={48} fill="#FFFFFF" stroke="var(--line)" />
          </div>

          <div className="relative text-center">
            <div className="mb-3 inline-flex items-center gap-2 text-[color:var(--muted)]">
              <PixelStar size={10} color="var(--accent)" />
              <span className="pixel-label">SAY / HI / HELLO</span>
              <PixelStar size={10} color="var(--accent)" />
            </div>

            <h2
              id="contact-title"
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
            >
              Got a{' '}
              <span className="font-sugar font-normal text-[color:var(--accent)]">
                sticky
              </span>{' '}
              problem?
            </h2>

            <p className="mx-auto mt-4 max-w-md text-[color:var(--muted)]">
              I&rsquo;m picky about projects, warm about people. Send the
              briefest brief — I&rsquo;ll reply in under 48 hours.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:hello@priyanka.design" className="candy-btn">
                <Mail size={16} strokeWidth={2.5} />
                hello@priyanka.design
              </a>
            </div>

            <ul
              role="list"
              className="mt-12 grid gap-3 text-left sm:grid-cols-2"
              aria-label="Elsewhere on the internet"
            >
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="soft-card soft-card-hover flex items-center justify-between px-5 py-4"
                    style={{ background: '#FFFFFF' }}
                  >
                    <div>
                      <p className="pixel-label text-[color:var(--muted)]">
                        {l.label.toUpperCase()}
                      </p>
                      <p className="mt-0.5 font-semibold">{l.value}</p>
                    </div>
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-[color:var(--muted)]">
          &copy; 2026 Priyanka Godhwani &middot; Designed and built with care
          and chai.
        </p>
      </div>
    </section>
  )
}
