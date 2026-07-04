import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { PhoneIcon } from './icons.jsx'
import { business } from '../lib/business.js'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit', href: '#visit' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Solidify the bar after scrolling past the hero fold
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-charcoal-950/85 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Logo onClick={close} />

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-cream-100/80 transition-colors hover:text-cream-50"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-gradient transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href={business.phoneHref} className="btn-gold text-sm">
            <PhoneIcon width={16} height={16} />
            Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-charcoal-900/60 text-cream-100 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? 'top-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? 'top-1.5 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* backdrop */}
        <div
          onClick={close}
          className={`absolute inset-0 bg-charcoal-950/70 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* panel */}
        <div
          className={`absolute right-0 top-0 flex h-full w-[78%] max-w-xs flex-col gap-2 border-l border-white/10 bg-charcoal-900 px-6 pb-8 pt-24 shadow-2xl transition-transform duration-500 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              style={{ transitionDelay: open ? `${i * 60 + 120}ms` : '0ms' }}
              className={`border-b border-white/5 py-3 font-serif text-xl text-cream-100 transition-all duration-300 hover:text-gold-400 ${
                open ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
            >
              {l.label}
            </a>
          ))}

          <div className="mt-6 flex flex-col gap-3">
            <a href={business.phoneHref} onClick={close} className="btn-gold w-full">
              <PhoneIcon width={16} height={16} />
              Call {business.phoneDisplay}
            </a>
            <a
              href={business.directionsHref}
              target="_blank"
              rel="noreferrer"
              onClick={close}
              className="btn-outline w-full"
            >
              Get Directions
            </a>
          </div>

          <p className="mt-auto pt-8 text-xs text-cream-200/40">
            {business.hours} · Bellmore, NY
          </p>
        </div>
      </div>
    </header>
  )
}
