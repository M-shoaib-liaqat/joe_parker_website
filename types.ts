
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
}

export interface Review {
  id: string;
  name: string;
  location: string;
  service: string;
  text: string;
  stars: number;
}
