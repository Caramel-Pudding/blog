import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { IPost } from "../types/post";

const postsDirectory = path.join(process.cwd(), "_posts");

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []): IPost {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Partial<IPost> = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      items[field as keyof IPost] = data[field];
    }
  });

  return items as IPost;
}

export function getAllPosts(fields: string[] = []): IPost[] {
  const slugs = getPostSlugs();
  return (
    slugs
      .map((slug) => getPostBySlug(slug, fields))
      // sort posts by date in descending order
      .sort((post1: IPost, post2: IPost) => (post1.date > post2.date ? -1 : 1))
  );
}
