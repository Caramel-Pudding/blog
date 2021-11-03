import { memo, FC } from "react";
import Link from "next/link";
import { DateFormatter } from "@/components/date-formatter";
import { CoverImage } from "@/components/cover-image";
import { IPost } from "@/types/post";

interface IPostPreviewProps {
  readonly post: IPost;
  readonly searchByTag: (tag: string) => void;
}

export const PostPreview: FC<IPostPreviewProps> = memo(
  ({ post, searchByTag }) => {
    const { title, coverImage, date, excerpt, slug, tags } = post;
    return (
      <div>
        <div className="mb-5">
          <CoverImage
            height={278}
            slug={slug}
            src={coverImage}
            title={title}
            width={556}
          />
        </div>
        <h3 className="text-3xl mb-3 leading-snug">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="mb-4 md:mb-0 text-lg">
          {tags?.map((tag) => (
            <button key={tag} type="button" onClick={() => searchByTag(tag)}>
              {tag}
            </button>
          ))}
        </div>
        <div className="text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      </div>
    );
  }
);
