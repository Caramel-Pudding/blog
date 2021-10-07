export interface IPost {
  title: string;
  date: string;
  coverImage: string;
  slug: string;
  excerpt?: string;
  content?: string;
  ogImage?: {
    url: string;
  };
}
