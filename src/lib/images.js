// ---------------------------------------------------------------------------
// LOCAL IMAGE MAP  (no external URLs, no stock/AI photos)
// ---------------------------------------------------------------------------
// Every photo used on the site is referenced from /public/images/ by filename.
// Drop the REAL shop photos into  public/images/  using EXACTLY these names and
// they will appear automatically. Until a file exists, <SmartImage> shows a
// tasteful branded fallback panel (never a broken image icon).
//
//   HOW TO REPLACE A PHOTO:
//   1. Save the photo into  public/images/
//   2. Match the filename below (or edit the filename here to match your file)
//
// Suggested source photo for each slot is noted in the comment.
// ---------------------------------------------------------------------------

export const images = {
  // Hero background — the illuminated storefront sign at night (blue glow).
  storefrontNight: '/images/storefront-night.jpg',

  // Daytime storefront — green/teal awning, brick building.
  storefrontDay: '/images/storefront-day.jpg',

  // Google Street View of the shop — used in the Visit / Location section.
  streetView: '/images/street-view.jpg',

  // Barber cutting a child's hair in the Lightning-McQueen car chair (family/kids).
  barberKid: '/images/barber-kid-car.jpg',

  // Interior shot — young customer in the foreground, barber working behind.
  interior: '/images/interior-boy.jpg',
}
