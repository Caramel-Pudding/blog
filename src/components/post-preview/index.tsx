import { memo, FC, MouseEvent } from "react";
import Link from "next/link";
import cn from "classnames";
import { DateFormatter } from "@/components/date-formatter";
import { IPost } from "@/types/post";

interface IPostPreviewProps {
  readonly post: IPost;
  readonly searchByTag: (tag: string) => void;
}

export const PostPreview: FC<IPostPreviewProps> = memo(
  ({ post, searchByTag }) => {
    const tagClickHandler = (
      event: MouseEvent<HTMLButtonElement>,
      tag: string
    ) => {
      event.preventDefault();
      searchByTag(tag);
    };

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
            <h3 className="text-3xl mb-3 leading-snug">
              <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <a className="hover:underline">{title}</a>
              </Link>
            </h3>
            <div>
              <div className="mb-4 md:mb-0 text-lg">
                {tags?.map((tag) => (
                  <button
                    key={tag}
                    className={cn("rounded-3xl", "hover:bg-accent-2")}
                    type="button"
                    onClick={(event) => tagClickHandler(event, tag)}
                  >
                    {tag}&nbsp;
                  </button>
                ))}
              </div>
              <div className="text-lg mb-4">
                <DateFormatter dateString={date} />
              </div>
            </div>
          </div>
        </a>
      </Link>
    );
  }
);
