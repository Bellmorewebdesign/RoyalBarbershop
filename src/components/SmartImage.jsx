import { useState } from 'react'

/**
 * SmartImage renders a LOCAL photo from /public/images and, if that file does
 * not exist yet (or fails to load), shows a tasteful branded fallback panel
 * instead of a broken-image icon. No external URLs are ever used.
 *
 * Drop the real shop photos into /public/images (see src/lib/images.js) and
 * they replace the fallback automatically.
 */
export default function SmartImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  label, // short caption shown on the fallback panel
}) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <BrandFallback label={label || alt} />
      )}
    </div>
  )
}

/**
 * Branded fallback: dark charcoal panel with a subtle barber-pole diagonal
 * pattern, a gold monogram crest and the shop name. Reads as an intentional
 * design element, not a missing image.
 */
function BrandFallback({ label }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-charcoal-850">
      {/* diagonal barber-pole texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #c9a24b 0 12px, transparent 12px 30px)',
        }}
      />
      {/* soft radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 40%, rgba(201,162,75,0.14), transparent 70%)',
        }}
      />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gold-500/40 bg-charcoal-900">
          <span className="font-serif text-3xl font-bold text-gradient-gold">R</span>
        </div>
        <div>
          <p className="font-script text-2xl leading-none text-gold-400">Royal</p>
          <p className="font-condensed text-[0.65rem] uppercase tracking-[0.35em] text-cream-200/70">
            Barber Shop
          </p>
        </div>
        {label && (
          <p className="max-w-[16rem] text-xs text-cream-200/50">{label}</p>
        )}
      </div>
    </div>
  )
}
