import SmartImage from './SmartImage.jsx'
import { business } from '../lib/business.js'
import { images } from '../lib/images.js'
import { PhoneIcon, PinIcon, ClockIcon } from './icons.jsx'

export default function Visit() {
  return (
    <section id="visit" className="relative bg-charcoal-900 py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow mb-4" data-reveal>
            Come see us
          </p>
          <h2
            className="font-serif text-3xl font-bold leading-tight text-cream-50 sm:text-4xl lg:text-5xl"
            data-reveal
            style={{ '--reveal-delay': '80ms' }}
          >
            Visit Royal Barber Shop
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Location photo card (links to directions).
              Replace public/images/street-view.jpg with your storefront photo. */}
          <a
            href={business.directionsHref}
            target="_blank"
            rel="noreferrer"
            data-reveal
            className="group relative block overflow-hidden rounded-3xl border border-white/10 shadow-card"
            aria-label="Open Royal Barber Shop in Google Maps"
          >
            <SmartImage
              src={images.streetView}
              alt="Street view of Royal Barber Shop at 2111 Bellmore Ave, Bellmore, NY"
              className="aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-105"
              label="2111 Bellmore Ave"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient text-charcoal-950">
                  <PinIcon width={20} height={20} />
                </span>
                <div>
                  <p className="font-semibold text-cream-50">
                    {business.addressLine}
                  </p>
                  <p className="text-sm text-cream-100/70">
                    {business.cityStateZip}
                  </p>
                </div>
              </div>
              <span className="hidden rounded-full border border-white/20 bg-charcoal-950/50 px-4 py-2 text-xs font-medium text-cream-50 backdrop-blur-sm transition-colors group-hover:border-gold-400 sm:inline-block">
                Open in Maps →
              </span>
            </div>
          </a>

          {/* Details card */}
          <div
            className="card flex flex-col justify-center gap-6 p-8 sm:p-10"
            data-reveal
            style={{ '--reveal-delay': '120ms' }}
          >
            <InfoRow
              icon={<PinIcon width={20} height={20} />}
              label="Address"
            >
              <p className="text-cream-100">{business.addressLine}</p>
              <p className="text-cream-100/70">{business.cityStateZip}</p>
            </InfoRow>

            <div className="h-px w-full bg-white/[0.07]" />

            <InfoRow
              icon={<PhoneIcon width={20} height={20} />}
              label="Phone"
            >
              <a
                href={business.phoneHref}
                className="text-cream-100 transition-colors hover:text-gold-400"
              >
                {business.phoneDisplay}
              </a>
            </InfoRow>

            <div className="h-px w-full bg-white/[0.07]" />

            <InfoRow
              icon={<ClockIcon width={20} height={20} />}
              label="Hours"
            >
              <p className="text-cream-100">{business.hours}</p>
              <p className="text-sm text-cream-100/60">{business.hoursNote}</p>
            </InfoRow>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <a href={business.phoneHref} className="btn-gold flex-1">
                <PhoneIcon width={18} height={18} />
                Call Now
              </a>
              <a
                href={business.directionsHref}
                target="_blank"
                rel="noreferrer"
                className="btn-outline flex-1"
              >
                <PinIcon width={18} height={18} />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ icon, label, children }) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-500/25 bg-charcoal-900 text-gold-400">
        {icon}
      </span>
      <div>
        <p className="font-condensed text-[0.62rem] uppercase tracking-[0.28em] text-cream-100/45">
          {label}
        </p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  )
}
