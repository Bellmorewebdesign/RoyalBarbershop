// Single source of truth for business info used across the site.
// Update these values here and they change everywhere.

export const business = {
  name: 'Royal Barber Shop',
  addressLine: '2111 Bellmore Ave',
  cityStateZip: 'Bellmore, NY 11710',
  fullAddress: '2111 Bellmore Ave, Bellmore, NY 11710',

  // Display phone vs. dial-able phone
  phoneDisplay: '(646) 409-3677',
  phoneHref: 'tel:+16464093677',

  hours: 'Open 7 Days',
  hoursNote: 'Hours may vary on holidays.',

  rating: 4.7,
  reviewCount: 60,

  // Google Maps "Get Directions" deep link for the shop address.
  directionsHref:
    'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent('2111 Bellmore Ave, Bellmore, NY 11710'),

  poweredBy: {
    label: 'Bellmore Web Design',
    href: 'https://Bellmorewebdesign.com',
  },
}
