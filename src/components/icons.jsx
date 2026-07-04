// Original inline SVG icons (no external assets). Stroke inherits currentColor.

const base = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function ScissorsIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <line x1="8.1" y1="7.6" x2="20" y2="18" />
      <line x1="8.1" y1="16.4" x2="20" y2="6" />
      <line x1="8.1" y1="7.6" x2="14" y2="12" />
    </svg>
  )
}

export function ClippersIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4v3.2c0 .5.3.9.8 1L9 9" />
      <path d="M4 4h5" />
      <path d="M6 4v3" />
      <path d="M8 4v3" />
      <rect x="9" y="8.4" width="4" height="4" rx="1" transform="rotate(45 11 10.4)" />
      <path d="M12.5 11.5 20 19" />
      <path d="M15 9l4 4" />
    </svg>
  )
}

export function LineupIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20 14.5 9.5" />
      <path d="m13 8 3 3" />
      <path d="M15.5 5.5 18.5 8.5" />
      <path d="M14.2 6.8 17.2 9.8" />
      <path d="M16.8 4.2 19.8 7.2" />
      <path d="m5 19 1.5 1.5" />
    </svg>
  )
}

export function BeardIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 5v4a6 6 0 0 0 12 0V5" />
      <path d="M6 9c0 5 2.5 9 6 9s6-4 6-9" />
      <path d="M9 8.5h.01" />
      <path d="M15 8.5h.01" />
      <path d="M12 13c-.8 1-2.2 1-3 0" />
      <path d="M12 13c.8 1 2.2 1 3 0" />
    </svg>
  )
}

export function RazorIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 3l7 7" />
      <path d="M9.5 9.5 12 7l5 5c1 1 1 2.5 0 3.5s-2.5 1-3.5 0z" />
      <path d="M14 16.5 8.5 22" />
      <path d="M13 15.5 7.5 21" />
    </svg>
  )
}

export function KidIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="7" r="3" />
      <path d="M8 6.5c1.2-2.5 6.8-2.5 8 0" />
      <path d="M6.5 21c.6-3.6 3-5.5 5.5-5.5s4.9 1.9 5.5 5.5" />
      <path d="M10 20v-2.5" />
      <path d="M14 20v-2.5" />
    </svg>
  )
}

// Utility icons
export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 3.5h3l1.2 4-2 1.3a12 12 0 0 0 5 5l1.3-2 4 1.2v3c0 1-.8 1.8-1.8 1.7A16 16 0 0 1 4.8 6.3 1.8 1.8 0 0 1 6.5 3.5z" />
    </svg>
  )
}

export function PinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s6.5-5.7 6.5-11a6.5 6.5 0 1 0-13 0C5.5 15.3 12 21 12 21z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  )
}

export function ClockIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  )
}

export function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.2l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.9 6.1 20.2l1.2-6.5L2.5 9.1l6.6-.9z" />
    </svg>
  )
}

export const serviceIcons = {
  scissors: ScissorsIcon,
  clippers: ClippersIcon,
  lineup: LineupIcon,
  beard: BeardIcon,
  razor: RazorIcon,
  kid: KidIcon,
}
