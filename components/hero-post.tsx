import { memo, FC } from "react";
import Link from "next/link";
import { DateFormatter } from "./date-formatter";
import { CoverImage } from "./cover-image";
import { IPost } from "../types/post";

interface IHeroPostProps {
  readonly post: IPost;
}

export const HeroPost: FC<IHeroPostProps> = memo(({ post }) => {
  const { title, coverImage, date, excerpt, slug } = post;
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          height={620}
          slug={slug}
          src={coverImage}
          title={title}
          width={1240}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
});
