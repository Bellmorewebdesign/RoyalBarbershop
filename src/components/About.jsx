import SmartImage from './SmartImage.jsx'
import { images } from '../lib/images.js'

const stats = [
  { value: '4.7★', label: 'Google Rating' },
  { value: '7 Days', label: 'Open Weekly' },
  { value: 'Family', label: 'Owned & Run' },
  { value: 'All Ages', label: 'Kids & Adults' },
]

export default function About() {
  return (
    <section id="about" className="relative bg-charcoal-950 py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Image collage — real shop photos.
            Replace public/images/barber-kid-car.jpg and interior-boy.jpg. */}
        <div className="relative order-2 lg:order-1" data-reveal>
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-white/10 shadow-card">
            <SmartImage
              src={images.barberKid}
              alt="Barber giving a child a haircut in the car-shaped kids chair at Royal Barber Shop"
              className="h-full w-full"
              label="In the chair"
            />
          </div>

          {/* Overlapping secondary photo */}
          <div className="absolute -bottom-8 -right-2 aspect-square w-40 overflow-hidden rounded-2xl border border-gold-500/30 shadow-card sm:w-52 lg:-right-8">
            <SmartImage
              src={images.interior}
              alt="Inside Royal Barber Shop with a young customer and barber at work"
              className="h-full w-full"
              label="Inside the shop"
            />
          </div>

          {/* Floating "walk-ins welcome" badge */}
          <div className="absolute -left-3 -top-5 rounded-2xl border border-gold-500/30 bg-charcoal-900/90 px-4 py-3 text-center shadow-gold-sm backdrop-blur-sm sm:-left-6">
            <p className="font-serif text-xl font-bold text-gradient-gold">Walk-Ins</p>
            <p className="font-condensed text-[0.6rem] uppercase tracking-[0.25em] text-cream-100/70">
              Welcome
            </p>
          </div>
        </div>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <p className="eyebrow mb-4" data-reveal>
            About the shop
          </p>
          <h2
            className="font-serif text-3xl font-bold leading-tight text-cream-50 sm:text-4xl lg:text-5xl"
            data-reveal
            style={{ '--reveal-delay': '80ms' }}
          >
            A neighborhood barber shop
            <span className="text-gradient-gold"> Bellmore trusts.</span>
          </h2>

          <div
            className="mt-6 space-y-4 text-base leading-relaxed text-cream-100/75"
            data-reveal
            style={{ '--reveal-delay': '160ms' }}
          >
            <p>
              Royal Barber Shop is a local Bellmore barber shop known for
              friendly service, clean haircuts and fair prices. Whether you
              need a fresh fade, a sharp shape-up, a beard trim or a
              traditional shave, our barbers take the time to get it right.
            </p>
            <p>
              It's a welcoming, family-style atmosphere where regulars feel at
              home and first-timers leave looking their best. From little ones
              getting their first kids cut to guys who've trusted the same
              chair for years — everyone gets the royal treatment.
            </p>
          </div>

          {/* Stat chips */}
          <dl
            className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4"
            data-reveal
            style={{ '--reveal-delay': '240ms' }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/[0.07] bg-charcoal-850/70 px-4 py-4 text-center transition-colors hover:border-gold-500/40"
              >
                <dt className="font-serif text-xl font-bold text-cream-50">
                  {s.value}
                </dt>
                <dd className="mt-1 font-condensed text-[0.6rem] uppercase tracking-[0.18em] text-cream-100/55">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
