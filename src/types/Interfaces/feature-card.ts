export interface IFeatureCard {
  image?: string;
  alt?: string;
  title?: string;
  step?: number;
  description?: {
    title?: string;
    text?: string;
  }
}