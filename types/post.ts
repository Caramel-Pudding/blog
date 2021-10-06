import { IAuthor } from "./author";

export interface IPost {
  title: string;
  date: string;
  author: IAuthor;
  coverImage: string;
  slug: string;
  excerpt?: string;
  content?: string;
  ogImage?: {
    url: string;
  };
}
