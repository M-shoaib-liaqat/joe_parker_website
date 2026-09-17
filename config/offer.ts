// Single source of truth for the website-only promo code / free-offer campaign.
// Flip `enabled` to true once the client has confirmed the offer with the business
// owner — until then PromoOfferBlock and the sticky-bar tooltip render nothing.
// The code deliberately lives ONLY here and on the website (not on GBP/directories/
// print) so a customer mentioning it on a call unambiguously proves web origin.
export const OFFER_CONFIG = {
  enabled: false,
  code: 'SPARK25',
  headline: 'Free 10-Point Safety Check with Every Website Booking',
  subtext:
    "Mention code SPARK25 when you call to claim your free 10-Point Safety Check with your booking. Included at no extra cost when you book via the website, WhatsApp, or the quote form.",
  bannerText: 'Mention code SPARK25 for a FREE 10-Point Safety Check with your booking',
};
