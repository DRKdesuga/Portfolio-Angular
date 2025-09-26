export interface Project {
  slug: string;
  title: string;
  short: string;
  image?: string;
  tech: string[];
  description: string;
  links?: { label: string; url: string }[];
}
