import { Award, Briefcase, Cat, PhoneCall } from 'lucide-react'
import RotatingBadge from './RotatingBadge'

const stack = [
  { name: 'SLEEP.js', level: 99, color: 'bg-sunshine' },
  { name: 'MEOW++', level: 94, color: 'bg-cottonPink' },
  { name: 'ZOOMIES 3D', level: 88, color: 'bg-skyCandy' },
  { name: 'KEYBOARD/WALK', level: 100, color: 'bg-mint' },
  { name: 'LAP-AAS', level: 72, color: 'bg-lilac' },
]

export default function VipCat() {
  return (
    <section id="vip" className="mx-3 sm:mx-6 mt-20 sm:mt-28">
      <div className="mb-10">
        <span className="chip !bg-sunshine">section · 04 · v.i.p.</span>
        <h2 className="mt-4 font-serifDisplay text-5xl sm:text-7xl leading-[0.9]">
          <span className="text-rose dark:text-star">meet the</span>{' '}
          <span className="outlined-thick" style={{ ['--stroke' as string]: 'var(--ink)' }}>lead consultant</span>
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Profile ticket */}
        <article className="ticket p-6 sm:p-8 lg:col-span-7 relative">
          <div className="absolute -top-4 -right-4 z-10">
            <RotatingBadge
              text="employee of the century"
              size={112}
              fill="#FF3E8A"
              textColor="#FFF6EA"
              inner="★"
            />
          </div>

          <div className="ticket-inner p-5 sm:p-6">
            <div className="grid gap-6 sm:grid-cols-[auto,1fr] items-start">
              <div className="relative">
                <div className="h-40 w-40 rounded-2xl border-1.5 border-plum dark:border-star bg-sunshine grid place-items-center text-7xl shadow-[3px_3px_0_0_#8C1E5C] dark:shadow-[3px_3px_0_0_#FFE6F5]" aria-hidden>
                  🐈
                </div>
                <div className="absolute -bottom-3 -left-3 rounded-full border-1.5 border-plum dark:border-star bg-cream dark:bg-nightSoft p-2 -rotate-6 shadow-[2px_2px_0_0_#8C1E5C] dark:shadow-[2px_2px_0_0_#FFE6F5]">
                  <Cat size={16} strokeWidth={2.5} />
                </div>
              </div>

              <div>
                <p className="font-hand text-2xl -rotate-2 text-rose dark:text-star mb-1">
                  please welcome,
                </p>
                <h3 className="font-serifDisplay text-4xl sm:text-5xl leading-[0.95] text-inkRose dark:text-star">
                  MISO,
                </h3>
                <h3
                  className="font-serifDisplay text-4xl sm:text-5xl leading-[0.95] outlined-thick"
                  style={{ ['--stroke' as string]: '#D6286F' }}
                >
                  PRINCIPAL MISCHIEF OFFICER
                </h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-inkRose/70 dark:text-star/70">
                  she / her · est. 2023 · 4.2 kg of opinion
                </p>
                <p className="mt-4 font-sans text-sm sm:text-base leading-relaxed text-inkRose/85 dark:text-star/85">
                  Miso joined the studio in Q4 2023 as an unpaid intern and
                  was rapidly promoted to <b>Lead Consultant</b> after
                  single-handedly redesigning the Q1 roadmap (she walked
                  across the keyboard). Specializes in loaf-based project
                  management and critical feedback delivered at 5:43 AM.
                </p>

                <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  <li className="chip"><Award size={11} strokeWidth={2.5} /> 12 naps/day</li>
                  <li className="chip"><Briefcase size={11} strokeWidth={2.5} /> 0 deadlines met</li>
                  <li className="chip"><PhoneCall size={11} strokeWidth={2.5} /> 100% on-call</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        {/* Cat-stack soft card */}
        <article className="soft-card p-6 sm:p-8 lg:col-span-5">
          <div className="flex items-center justify-between">
            <h3 className="font-serifDisplay text-3xl sm:text-4xl text-inkRose dark:text-star">
              the <span className="outlined" style={{ ['--stroke' as string]: '#D6286F' }}>cat-stack</span>
            </h3>
            <span className="chip !bg-bubblegum !text-cream">v 9.9.9</span>
          </div>
          <p className="font-hand text-xl -rotate-1 mt-1 text-rose dark:text-star">
            battle-tested. mostly on laps.
          </p>

          <ul className="mt-6 space-y-4">
            {stack.map((s) => (
              <li key={s.name}>
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.12em]">
                  <span className="font-serifDisplay normal-case text-base tracking-normal text-inkRose dark:text-star">
                    {s.name}
                  </span>
                  <span className="text-inkRose/70 dark:text-star/70">{s.level}%</span>
                </div>
                <div className="mt-2 h-4 rounded-full border-1.5 border-plum dark:border-star bg-cream/50 dark:bg-night/50 overflow-hidden">
                  <div
                    className={`${s.color} h-full border-r-1.5 border-plum dark:border-star`}
                    style={{ width: `${s.level}%` }}
                    role="progressbar"
                    aria-label={s.name}
                    aria-valuenow={s.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl border-1.5 border-plum dark:border-star bg-sunshine p-3 text-inkRose">
              <div className="font-serifDisplay text-2xl">18 HR</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em]">sleep / day</div>
            </div>
            <div className="rounded-2xl border-1.5 border-plum dark:border-star bg-bubblegum text-cream p-3">
              <div className="font-serifDisplay text-2xl">42</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em]">keystrokes</div>
            </div>
            <div className="rounded-2xl border-1.5 border-plum dark:border-star bg-skyCandy p-3 text-inkRose">
              <div className="font-serifDisplay text-2xl">∞</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em]">zoomies/hr</div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
