import { memo, FC } from "react";
import Image from "next/image";
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
        <PostTitle>{title}</PostTitle>
        <div className="hidden md:block md:mb-12" />
        <div className="mb-8 md:mb-16 sm:mx-0">
          <Image
            alt={`Cover Image for ${title}`}
            height={620}
            layout="responsive"
            src={coverImage}
            width={1240}
          />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="mb-6 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
      </>
    );
  }
);
