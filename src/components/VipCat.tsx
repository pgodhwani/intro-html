import { Award, Briefcase, Cat, PhoneCall } from 'lucide-react'

const stack = [
  { name: 'SLEEP.js', level: 99, color: 'bg-brutYellow' },
  { name: 'MEOW++', level: 94, color: 'bg-brutPink' },
  { name: 'ZOOMIES 3D', level: 88, color: 'bg-brutBlue' },
  { name: 'KEYBOARD/WALK', level: 100, color: 'bg-brutGreen' },
  { name: 'LAP-AAS', level: 72, color: 'bg-brutOrange' },
]

export default function VipCat() {
  return (
    <section id="vip" className="mx-3 sm:mx-6 mt-16 sm:mt-24">
      <div className="mb-8">
        <span className="brut-sticker bg-brutYellow -rotate-2 text-xs sm:text-sm">
          Section 04 · V.I.P.
        </span>
        <h2 className="mt-4 font-display text-4xl sm:text-6xl leading-none">
          MEET THE LEAD CONSULTANT
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Profile card */}
        <article className="brut-card p-6 lg:col-span-7 relative overflow-hidden">
          <div className="absolute -top-3 -right-3 brut-sticker bg-brutPink text-white rotate-6">
            EMPLOYEE OF THE CENTURY
          </div>

          <div className="grid gap-6 sm:grid-cols-[auto,1fr] items-start">
            <div className="relative">
              <div className="h-40 w-40 border-3 border-ink dark:border-paper bg-brutOrange grid place-items-center text-7xl shadow-brut-sm dark:shadow-brut-dark-sm" aria-hidden>
                🐈
              </div>
              <div className="absolute -bottom-3 -left-3 brut-card !p-2 -rotate-6">
                <Cat size={18} strokeWidth={3} />
              </div>
            </div>

            <div>
              <h3 className="font-display text-3xl sm:text-4xl leading-tight">
                MISO, PRINCIPAL MISCHIEF OFFICER
              </h3>
              <p className="mt-1 font-mono text-sm uppercase opacity-70">
                she / her · est. 2023 · 4.2 kg of opinion
              </p>
              <p className="mt-4 font-mono text-sm sm:text-base leading-relaxed">
                Miso joined the studio in Q4 2023 as an unpaid intern and was
                rapidly promoted to <b>Lead Consultant</b> after single-handedly
                redesigning the Q1 roadmap (she walked across the keyboard).
                Specializes in loaf-based project management and critical
                feedback delivered at 5:43 AM.
              </p>

              <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                <li className="brut-chip"><Award size={14} strokeWidth={3} /> 12 naps/day</li>
                <li className="brut-chip"><Briefcase size={14} strokeWidth={3} /> 0 deadlines met</li>
                <li className="brut-chip"><PhoneCall size={14} strokeWidth={3} /> 100% on-call</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Cat-stack card */}
        <article className="brut-card p-6 lg:col-span-5 bg-white dark:bg-charcoalSoft">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-2xl sm:text-3xl">THE CAT-STACK</h3>
            <span className="brut-chip">v 9.9.9</span>
          </div>
          <p className="font-hand text-xl -rotate-1 mt-1 opacity-85">
            battle-tested. mostly on laps.
          </p>

          <ul className="mt-6 space-y-4">
            {stack.map((s) => (
              <li key={s.name}>
                <div className="flex items-center justify-between font-mono text-sm">
                  <span className="font-display tracking-tight">{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div className="mt-2 h-5 border-3 border-ink dark:border-paper bg-white dark:bg-charcoal">
                  <div
                    className={`${s.color} h-full border-r-3 border-ink dark:border-paper`}
                    style={{ width: `${s.level}%` }}
                    aria-label={`${s.name} ${s.level}%`}
                    role="progressbar"
                    aria-valuenow={s.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="border-3 border-ink dark:border-paper bg-brutYellow p-3">
              <div className="font-display text-2xl">18 HR</div>
              <div className="font-mono text-xs">sleep / day</div>
            </div>
            <div className="border-3 border-ink dark:border-paper bg-brutPink text-white p-3">
              <div className="font-display text-2xl">42</div>
              <div className="font-mono text-xs">keystrokes</div>
            </div>
            <div className="border-3 border-ink dark:border-paper bg-brutBlue text-white p-3">
              <div className="font-display text-2xl">∞</div>
              <div className="font-mono text-xs">zoomies / hr</div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
