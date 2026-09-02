export type CategoryType = 'ALL' | 'SOFT GLAM' | 'FULL GLAM' | 'BRIDAL';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'SOFT GLAM' | 'FULL GLAM' | 'BRIDAL';
  subtitle: string;
  image: string;
  aspectRatio: 'portrait' | 'tall' | 'square' | 'wide';
  featuredQuote?: string;
  description: string;
  technique: string;
  palette: string[];
  keyProducts: string[];
  client: string;
  year: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  occasion: string;
  image?: string;
  date: string;
  lookTitle: string;
}
