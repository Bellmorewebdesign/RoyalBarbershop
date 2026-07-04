import { reviews, reviewKeywords } from '../data/reviews.js'
import { business } from '../lib/business.js'
import Stars from './Stars.jsx'

function initials(name) {
  return name
    .replace(/[^a-zA-Z ]/g, '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('')
}

// Deterministic subtle avatar tint per person (kept within brand palette).
const tints = [
  'from-gold-500/30 to-gold-700/20',
  'from-charcoal-600 to-charcoal-800',
  'from-gold-400/25 to-charcoal-700',
]

function ReviewCard({ review, index }) {
  return (
    <article
      data-reveal
      style={{ '--reveal-delay': `${(index % 3) * 90}ms` }}
      className="group mb-5 break-inside-avoid card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/30"
    >
      <div className="mb-3 flex items-center justify-between">
        <Stars rating={review.stars} size={15} />
        {/* Google 'G' mark (original, no external asset) */}
        <span
          aria-hidden="true"
          className="font-serif text-sm font-bold text-cream-100/25"
          title="Google review"
        >
          G
        </span>
      </div>

      <p className="text-sm leading-relaxed text-cream-100/80">
        “{review.text}”
      </p>

      <div className="mt-5 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${
            tints[index % tints.length]
          } text-xs font-bold text-cream-50 ring-1 ring-white/10`}
        >
          {initials(review.name)}
        </div>
        <div>
          <p className="text-sm font-semibold text-cream-50">{review.name}</p>
          <p className="text-xs text-cream-100/45">Verified Google review</p>
        </div>
      </div>
    </article>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-charcoal-950 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
          {/* Summary panel */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow mb-4" data-reveal>
              What people say
            </p>
            <h2
              className="font-serif text-3xl font-bold leading-tight text-cream-50 sm:text-4xl lg:text-5xl"
              data-reveal
              style={{ '--reveal-delay': '80ms' }}
            >
              Loved by the <span className="text-gradient-gold">neighborhood.</span>
            </h2>

            <div
              className="mt-8 card p-7"
              data-reveal
              style={{ '--reveal-delay': '140ms' }}
            >
              <div className="flex items-end gap-4">
                <span className="font-serif text-6xl font-black leading-none text-gradient-gold">
                  {business.rating.toFixed(1)}
                </span>
                <div className="pb-1">
                  <Stars rating={business.rating} size={20} />
                  <p className="mt-1.5 text-sm text-cream-100/65">
                    Based on{' '}
                    <span className="font-semibold text-cream-50">
                      {business.reviewCount} Google reviews
                    </span>
                  </p>
                </div>
              </div>

              {/* keyword chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {reviewKeywords.map((k) => (
                  <span
                    key={k}
                    className="rounded-full border border-gold-500/25 bg-gold-500/[0.06] px-3 py-1.5 text-xs font-medium text-gold-300"
                  >
                    {k}
                  </span>
                ))}
              </div>

              <a
                href={business.directionsHref}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
              >
                See us on Google
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Masonry of review cards */}
          <div className="columns-1 gap-5 sm:columns-2">
            {reviews.map((r, i) => (
              <ReviewCard key={r.name} review={r} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
