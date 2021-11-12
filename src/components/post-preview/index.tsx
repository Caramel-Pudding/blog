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
}

export const PostPreview: FC<IPostPreviewProps> = memo(
  ({ post, searchByTag, chosenTag }) => {
    const { title, coverImage, date, slug, tags } = post;
    return (
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a aria-label={title}>
          <div
            className={cn(
              "flex",
              "flex-col",
              "justify-between",
              "rounded-3xl",
              "bg-cover",
              "p-10",
              "transition",
              "duration-500",
              "ease-in-out",
              "transform",
              "hover:-translate-y-4"
            )}
            style={{
              width: 400,
              height: 400,
              backgroundImage: `url(${coverImage})`,
            }}
          >
            <h3 className={cn("text-3xl", "mb-3", "leading-snug")}>
              <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <a className="hover:underline">{title}</a>
              </Link>
            </h3>
            <div>
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
            </div>
          </div>
        </a>
      </Link>
    );
  }
);
