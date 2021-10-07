import { memo, FC } from "react";
import { DateFormatter } from "./date-formatter";
import { CoverImage } from "./cover-image";
import { PostTitle } from "./post-title";

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
          <CoverImage
            height={620}
            src={coverImage}
            title={title}
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
