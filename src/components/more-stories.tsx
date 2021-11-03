import { memo, FC } from "react";
import { IPost } from "@/types/post";
import { PostPreview } from "@/components/post-preview";

interface IMoreStoriesProps {
  readonly posts: IPost[];
  readonly searchByTag: (tag: string) => void;
}

export const MoreStories: FC<IMoreStoriesProps> = memo(
  ({ posts, searchByTag }) => {
    return (
      <section>
        <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
          More Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              post={post}
              searchByTag={searchByTag}
            />
          ))}
        </div>
      </section>
    );
  }
);
