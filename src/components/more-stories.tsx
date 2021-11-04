import { memo, FC } from "react";
import cn from "classnames";
import { IPost } from "@/types/post";
import { PostPreview } from "@/components/post-preview";

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
          "grid",
          "grid-cols-1",
          "md:grid-cols-2",
          "xl:grid-cols-3",
          "md:gap-x-16",
          "xl:gap-x-28",
          "gap-y-20",
          "xl:gap-y-28",
          "mb-32"
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
