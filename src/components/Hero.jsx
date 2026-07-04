import SmartImage from './SmartImage.jsx'
import Stars from './Stars.jsx'
import { PhoneIcon, PinIcon } from './icons.jsx'
import { business } from '../lib/business.js'
import { images } from '../lib/images.js'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background photo — the illuminated storefront at night.
          Replace public/images/storefront-night.jpg with your photo. */}
      <div className="absolute inset-0">
        <SmartImage
          src={images.storefrontNight}
          alt="Royal Barber Shop storefront lit up at night in Bellmore, NY"
          className="h-full w-full"
          imgClassName="scale-105"
          label="Storefront at night"
        />
        {/* Cinematic dark gradient overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/85 via-charcoal-950/60 to-charcoal-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/90 via-charcoal-950/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-20 pt-28 sm:px-8">
        <div className="max-w-3xl">
          <p
            className="eyebrow mb-5 flex items-center gap-3 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="h-px w-8 bg-gold-500" />
            Bellmore, NY · Open 7 Days
          </p>

          <h1
            className="font-serif text-4xl font-bold leading-[1.05] text-cream-50 opacity-0 animate-fade-up sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.22s' }}
          >
            Classic Cuts.
            <br />
            <span className="text-gradient-gold">Clean Fades.</span>
            <br />
            Local Bellmore Barbers.
          </h1>

          <p
            className="mt-6 max-w-xl text-base text-cream-100/75 opacity-0 animate-fade-up sm:text-lg"
            style={{ animationDelay: '0.36s' }}
          >
            Royal Barber Shop is a trusted local barber shop in Bellmore, NY —
            friendly service, sharp haircuts and a welcoming, family-style chair.
          </p>

          {/* Rating badge */}
          <div
            className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-charcoal-900/70 px-4 py-2 opacity-0 animate-fade-up backdrop-blur-sm"
            style={{ animationDelay: '0.48s' }}
          >
            <Stars rating={business.rating} size={16} />
            <span className="text-sm font-semibold text-cream-50">
              {business.rating.toFixed(1)}
            </span>
            <span className="h-4 w-px bg-white/15" />
            <span className="text-sm text-cream-100/70">
              {business.reviewCount} Google reviews
            </span>
          </div>

          {/* CTAs */}
          <div
            className="mt-9 flex flex-col gap-3 opacity-0 animate-fade-up sm:flex-row sm:gap-4"
            style={{ animationDelay: '0.6s' }}
          >
            <a href={business.phoneHref} className="btn-gold text-base">
              <PhoneIcon width={18} height={18} />
              Call Now
            </a>
            <a
              href={business.directionsHref}
              target="_blank"
              rel="noreferrer"
              className="btn-outline text-base"
            >
              <PinIcon width={18} height={18} />
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Animated barber-pole accent along the bottom edge */}
      <div className="absolute inset-x-0 bottom-0 h-1.5 barber-pole opacity-90" />

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream-100/50 transition-colors hover:text-gold-400 sm:flex"
      >
        <span className="font-condensed text-[0.65rem] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-cream-100/30 p-1">
          <span className="h-2 w-1 rounded-full bg-gold-400 animate-float" />
        </span>
      </a>
    </section>
  )
}
