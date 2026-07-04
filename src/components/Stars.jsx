import { StarIcon } from './icons.jsx'

/**
 * Star rating row. Supports fractional ratings (e.g. 4.7) via a clipped overlay.
 */
export default function Stars({ rating = 5, size = 18, className = '' }) {
  const full = Math.floor(rating)
  const fraction = rating - full

  return (
    <div
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        let fillPct = 0
        if (i < full) fillPct = 100
        else if (i === full) fillPct = Math.round(fraction * 100)

        return (
          <span
            key={i}
            className="relative inline-block"
            style={{ width: size, height: size }}
          >
            {/* empty base */}
            <StarIcon
              className="absolute inset-0 text-charcoal-600"
              style={{ width: size, height: size }}
            />
            {/* gold fill, clipped to the fraction */}
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fillPct}%` }}
            >
              <StarIcon
                className="text-gold-400"
                style={{ width: size, height: size }}
              />
            </span>
          </span>
        )
      })}
    </div>
  )
}
