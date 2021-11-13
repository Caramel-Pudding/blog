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
          "justify-items-center",
          "grid-cols-1",
          "lg:grid-cols-2",
          "xl:grid-cols-3",
          "gap-x-16",
          "lg:gap-x-20",
          "xl:gap-x-24",
          "gap-y-16",
          "lg:gap-y-20",
          "xl:gap-y-24",
          "mb-24"
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
