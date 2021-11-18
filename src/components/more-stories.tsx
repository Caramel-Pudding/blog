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
          "gap-16",
          "lg:gap-20",
          "xl:gap-24",
          "mb-24"
        )}
      >
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            chosenTag={chosenTag}
            isBio={false}
            isHeroPost={false}
            post={post}
            searchByTag={searchByTag}
            sizes={{ width: 400, height: 400 }}
          />
        ))}
      </section>
    );
  }
);
