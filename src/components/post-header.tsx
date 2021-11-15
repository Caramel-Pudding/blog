import { memo, FC } from "react";
import Image from "next/image";
import cn from "classnames";
import { DateFormatter } from "@/components/date-formatter";
import { PostTitle } from "@/components/post-title";

interface IPostHeaderProps {
  readonly title: string;
  readonly coverImage: string;
  readonly date: string;
}

export const PostHeader: FC<IPostHeaderProps> = memo(
  ({ title, coverImage, date }) => {
    return (
      <>
        <section className={cn("flex", "flex-col", "items-center")}>
          <PostTitle>{title}</PostTitle>
          <div className={cn("mb-6", "text-lg")}>
            <DateFormatter dateString={date} />
          </div>
        </section>
        <div className={cn("mb-8", "md:mb-16", "sm:mx-0")}>
          <Image
            alt={`Cover Image for ${title}`}
            height={620}
            layout="responsive"
            src={coverImage}
            width={1240}
          />
        </div>
      </>
    );
  }
);
