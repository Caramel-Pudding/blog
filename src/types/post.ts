export interface IPost {
  title: string;
  date: string;
  coverImage: string;
  slug: string;
  excerpt?: string;
  content?: string;
  tags?: string[];
  ogImage?: {
    url: string;
  };
}
