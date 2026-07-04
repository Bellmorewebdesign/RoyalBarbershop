/**
 * Text wordmark echoing the shop sign: script "Royal" over block "BARBER SHOP",
 * with a small barber-pole glyph. No image asset required.
 */
export default function Logo({ className = '', onClick }) {
  return (
    <a
      href="#home"
      onClick={onClick}
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Royal Barber Shop — back to top"
    >
      {/* mini barber pole */}
      <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-gold-500/40 bg-charcoal-900">
        <span
          aria-hidden="true"
          className="absolute inset-0 barber-pole opacity-80"
        />
        <span className="relative font-serif text-lg font-bold text-cream-50">R</span>
      </span>

      <span className="flex flex-col leading-none">
        <span className="font-script text-2xl text-gold-400 transition-colors group-hover:text-gold-300">
          Royal
        </span>
        <span className="font-condensed text-[0.62rem] uppercase tracking-[0.42em] text-cream-100/85">
          Barber Shop
        </span>
      </span>
    </a>
  )
}
