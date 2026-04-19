import { PixelCloud, PixelStar } from './Pixel'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pt-10 pb-24 md:pt-16 md:pb-32"
      aria-labelledby="hero-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(900px 500px at 50% 10%, #F4F1FF 0%, transparent 60%), linear-gradient(180deg, #ECE7FF 0%, #DCD4FF 100%)',
        }}
      />

      <div className="absolute left-6 top-6 hidden md:block">
        <PixelStar size={14} color="var(--accent)" className="animate-pixel-blink" />
      </div>
      <div className="absolute right-10 top-12 hidden md:block">
        <PixelStar size={10} color="var(--purple)" className="animate-pixel-blink" />
      </div>
      <div className="absolute left-1/4 top-20 hidden md:block">
        <PixelStar size={8} color="var(--accent)" />
      </div>

      <div className="mx-auto w-full max-w-3xl">
        <div className="relative mx-auto">
          <div className="ticket ticket-hover mx-auto px-8 py-14 md:px-14 md:py-20 text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <PixelStar size={10} color="var(--accent)" />
              <span className="pixel-label text-[color:var(--muted)]">
                HELLO / NAMASTE / BONJOUR
              </span>
              <PixelStar size={10} color="var(--accent)" />
            </div>

            <h1
              id="hero-title"
              className="font-sugar text-[color:var(--accent)] text-[64px] md:text-[96px] leading-none"
              style={{ textShadow: '0 1px 0 rgba(0,0,0,0.02)' }}
            >
              Priyanka
              <br />
              Godhwani
            </h1>

            <div className="mt-6 flex justify-center">
              <span
                className="inline-flex items-center rounded-full px-5 py-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase"
                style={{
                  background: 'transparent',
                  border: '1.5px solid var(--line)',
                  color: 'var(--ink)',
                }}
              >
                Product Designer
              </span>
            </div>

            <p className="mx-auto mt-8 max-w-md text-sm md:text-base text-[color:var(--muted)]">
              Designing for businesses that drive impact through{' '}
              <span className="font-sugar text-[color:var(--accent)] text-lg md:text-xl">
                design thinking
              </span>
              . Based in Mumbai, making soft systems for loud problems.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#work" className="candy-btn text-xs md:text-sm">
                See the work
              </a>
              <a
                href="#say-hi"
                className="inline-flex items-center gap-2 rounded-full border-1.5 border-[color:var(--line)] px-5 py-2.5 text-xs md:text-sm font-semibold hover:bg-white/60 transition-colors"
              >
                Say hello
              </a>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="relative mt-16 flex items-end justify-between px-2 md:px-6 opacity-90"
        >
          <PixelCloud size={80} fill="#FFFFFF" stroke="var(--line)" />
          <PixelCloud size={56} fill="#FFFFFF" stroke="var(--line)" className="mb-4" />
          <PixelCloud size={96} fill="#FFFFFF" stroke="var(--line)" />
          <PixelCloud size={48} fill="#FFFFFF" stroke="var(--line)" className="mb-2" />
          <PixelCloud size={72} fill="#FFFFFF" stroke="var(--line)" />
        </div>
      </div>
    </section>
  )
}
