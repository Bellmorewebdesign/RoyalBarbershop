import { useEffect } from 'react'

/**
 * Reveals any element carrying a `data-reveal` attribute once it scrolls into
 * view by adding the `is-visible` class. Uses a single IntersectionObserver for
 * the whole page. Elements start with the `.reveal` utility (see index.css).
 *
 * Optional per-element stagger: set `style={{ '--reveal-delay': '120ms' }}`.
 */
export function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'))
    if (els.length === 0) return

    // Reduced-motion or no IO support: just show everything.
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )

    els.forEach((el) => {
      el.classList.add('reveal')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}
