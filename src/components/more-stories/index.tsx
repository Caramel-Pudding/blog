import { memo, FC } from "react";
import cn from "classnames";
import { IPost } from "@/types/post";
import { PostPreview } from "@/components/post-preview";

import styles from "./styles.module.css";

interface IMoreStoriesProps {
  readonly posts: IPost[];
  readonly searchByTag: (tag: string) => void;
  readonly chosenTag: string;
}

export const MoreStories: FC<IMoreStoriesProps> = memo(
  ({ posts, searchByTag, chosenTag }) => {
    return (
      <section
        className={cn(
          "flex",
          "flex-wrap",
          "justify-center",
          "lg:justify-between",
          styles.posts
        )}
      >
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            chosenTag={chosenTag}
            post={post}
            searchByTag={searchByTag}
          />
        ))}
      </section>
    );
  }
);
