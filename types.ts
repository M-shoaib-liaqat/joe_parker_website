
export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  seoTitle: string;
  metaDescription: string;
  features: string[];
  /**
   * Optional hero image to display at the top of the service detail page.
   * Should be a path under `/assets/...` so that it uses local images rather
   * than external stock photos. If omitted a reasonable default will be
   * chosen from the gallery.
   */
  heroImage?: string;
  /**
   * Optional keyword override. Used by services that also have a dedicated
   * location-focused page (e.g. eicr-certificates / eicr-certificate-essex) to
   * avoid duplicating the location-booking keyword set on both pages.
   */
  keywords?: string;
  /**
   * Optional generic/educational Q&A content, distinct from the location +
   * booking focus of this service's dedicated Essex page (if one exists).
   * Only set for services that have such a counterpart page.
   */
  educationalFAQ?: { question: string; answer: string }[];
}

export interface Review {
  id: string;
  name: string;
  location: string;
  service: string;
  text: string;
  stars: number;
}
