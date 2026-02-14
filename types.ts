
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
}

export interface Review {
  id: string;
  name: string;
  location: string;
  service: string;
  text: string;
  stars: number;
}
