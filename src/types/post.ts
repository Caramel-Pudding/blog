export interface IPost {
  title: string;
  date: string;
  coverImage: string;
  slug: string;
  content?: string;
  tags: ReadonlyArray<string>;
  ogImage?: {
    url: string;
  };
}
