interface Portofolio {
  id: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  name: string;
  slug: string;
  image: string;
  link: string;
  clientName: string;
  category?: PortofolioCategory[];
  video: string;
  description: string;
  highlight: string;
  gallery?: Gallery[];
}