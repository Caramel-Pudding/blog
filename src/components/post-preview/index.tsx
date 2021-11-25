import { memo, FC } from "react";
import Link from "next/link";
import cn from "classnames";
import { DateFormatter } from "@/components/date-formatter";
import { IPost } from "@/types/post";
import { TagButton } from "../tag-button";

import styles from "./styles.module.css";

interface IPostPreviewProps {
  readonly post: IPost;
  readonly searchByTag: (tag: string) => void;
  readonly chosenTag: string;
  readonly sizes: {
    height: number;
    width: number;
  };
  readonly isHeroPost: boolean;
  readonly isBio: boolean;
}

export const PostPreview: FC<IPostPreviewProps> = memo(
  ({ post, searchByTag, chosenTag, sizes, isHeroPost, isBio }) => {
    const { title, coverImage, date, slug, tags } = post;
    return (
      <article
        className={cn("rounded-3xl", "bg-cover", {
          transition: !isHeroPost,
          "duration-500": !isHeroPost,
          "ease-in-out": !isHeroPost,
          transform: !isHeroPost,
          "hover:-translate-y-4": !isHeroPost,
        })}
        style={{
          width: sizes.width,
          height: sizes.height,
          backgroundImage: `url(${coverImage})`,
        }}
      >
        <Link
          as={isBio ? "/bio" : `/posts/${slug}`}
          href={isBio ? "/bio" : "/posts/[slug]"}
        >
          <a
            aria-label={title}
            className={cn(
              "flex",
              "flex-col",
              "justify-between",
              "rounded-3xl",
              "bg-black",
              "bg-opacity-10",
              "p-10",
              "w-full",
              "h-full",
              "text-white",
              "font-bold"
            )}
          >
            <h3
              className={cn(
                "mb-3",
                "leading-snug",
                "text-3xl",
                "hover:underline",
                {
                  "text-7xl": isHeroPost,
                }
              )}
            >
              {title}
            </h3>
            <section>
              <div className={cn("mb-4", "md:mb-0", "text-lg", styles.tags)}>
                {tags?.map((tag) => (
                  <TagButton
                    key={tag}
                    clickHandler={searchByTag}
                    isChosen={tag === chosenTag}
                    tag={tag}
                  />
                ))}
              </div>
              <div className={cn("text-lg", "mb-4")}>
                <DateFormatter dateString={date} />
              </div>
            </section>
          </a>
        </Link>
      </article>
    );
  }
);
