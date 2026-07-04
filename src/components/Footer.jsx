import Logo from './Logo.jsx'
import { business } from '../lib/business.js'
import { PhoneIcon, PinIcon } from './icons.jsx'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit', href: '#visit' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-charcoal-950 pt-16">
      {/* barber-pole accent */}
      <div className="h-1 w-full barber-pole opacity-80" />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-100/60">
              A trusted local barber shop in Bellmore, NY — classic cuts, clean
              fades and a welcoming, family-style atmosphere. Walk in and leave
              looking sharp.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={business.phoneHref} className="btn-gold text-sm">
                <PhoneIcon width={16} height={16} />
                Call Now
              </a>
              <a
                href={business.directionsHref}
                target="_blank"
                rel="noreferrer"
                className="btn-outline text-sm"
              >
                <PinIcon width={16} height={16} />
                Directions
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-condensed text-xs uppercase tracking-[0.28em] text-gold-400">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-cream-100/70 transition-colors hover:text-gold-400"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-condensed text-xs uppercase tracking-[0.28em] text-gold-400">
              Find Us
            </h3>
            <address className="mt-4 space-y-3 not-italic text-sm text-cream-100/70">
              <p>
                {business.addressLine}
                <br />
                {business.cityStateZip}
              </p>
              <p>
                <a
                  href={business.phoneHref}
                  className="transition-colors hover:text-gold-400"
                >
                  {business.phoneDisplay}
                </a>
              </p>
              <p className="text-cream-100/50">
                {business.hours} · {business.hoursNote}
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-7 sm:flex-row">
          <p className="text-xs text-cream-100/45">
            © {year} {business.name}. All rights reserved.
          </p>
          <p className="text-xs text-cream-100/55">
            Powered by{' '}
            <a
              href={business.poweredBy.href}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-gold-400 underline-offset-4 transition-colors hover:text-gold-300 hover:underline"
            >
              {business.poweredBy.label}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
