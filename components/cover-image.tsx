import { memo, FC } from "react";
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

interface ICoverImageProps {
  readonly title: string;
  readonly src: string;
  readonly slug?: string;
  readonly height: number;
  readonly width: number;
}

export const CoverImage: FC<ICoverImageProps> = memo(
  ({ title, src, slug, height, width }) => {
    const image = (
      <Image
        alt={`Cover Image for ${title}`}
        className={cn("shadow-sm", {
          "hover:shadow-md transition-shadow duration-200": Boolean(slug),
        })}
        height={height}
        layout="responsive"
        src={src}
        width={width}
      />
    );
    return (
      <div className="sm:mx-0">
        {slug ? (
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a aria-label={title}>{image}</a>
          </Link>
        ) : (
          image
        )}
      </div>
    );
  }
);
