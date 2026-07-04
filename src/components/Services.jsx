import { services } from '../data/services.js'
import { serviceIcons } from './icons.jsx'
import { business } from '../lib/business.js'
import { PhoneIcon } from './icons.jsx'

export default function Services() {
  return (
    <section id="services" className="relative bg-charcoal-900 py-24 sm:py-28">
      {/* subtle top hairline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4" data-reveal>
            What we do
          </p>
          <h2
            className="font-serif text-3xl font-bold leading-tight text-cream-50 sm:text-4xl lg:text-5xl"
            data-reveal
            style={{ '--reveal-delay': '80ms' }}
          >
            Services for every <span className="text-gradient-gold">chair</span>
          </h2>
          <p
            className="mt-4 text-cream-100/70"
            data-reveal
            style={{ '--reveal-delay': '140ms' }}
          >
            Full-service cuts and grooming for men and kids — walk in and leave
            looking sharp.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon]
            return (
              <article
                key={s.title}
                data-reveal
                style={{ '--reveal-delay': `${i * 80}ms` }}
                className="group card relative overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-gold-sm"
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold-500/0 blur-2xl transition-all duration-500 group-hover:bg-gold-500/10" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-500/30 bg-charcoal-900 text-gold-400 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-charcoal-950">
                  {Icon ? <Icon width={26} height={26} /> : null}
                </div>

                <h3 className="relative mt-5 font-serif text-xl font-semibold text-cream-50">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-cream-100/65">
                  {s.description}
                </p>

                <span className="relative mt-5 inline-block h-px w-10 bg-gold-gradient transition-all duration-300 group-hover:w-16" />
              </article>
            )
          })}
        </div>

        {/* CTA under services */}
        <div
          className="mt-12 flex flex-col items-center justify-center gap-4 text-center"
          data-reveal
        >
          <p className="text-sm text-cream-100/60">
            Ready for your next cut? No appointment needed.
          </p>
          <a href={business.phoneHref} className="btn-gold">
            <PhoneIcon width={18} height={18} />
            Call {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
