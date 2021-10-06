import { memo, FC } from "react";
import { Avatar } from "./avatar";
import { DateFormatter } from "./date-formatter";
import { CoverImage } from "./cover-image";
import { PostTitle } from "./post-title";
import { IAuthor } from "../types/author";

interface IPostHeaderProps {
  readonly title: string;
  readonly coverImage: string;
  readonly date: string;
  readonly author: IAuthor;
}

export const PostHeader: FC<IPostHeaderProps> = memo(
  ({ title, coverImage, date, author }) => {
    return (
      <>
        <PostTitle>{title}</PostTitle>
        <div className="hidden md:block md:mb-12">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage
            height={620}
            src={coverImage}
            title={title}
            width={1240}
          />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="block md:hidden mb-6">
            <Avatar name={author.name} picture={author.picture} />
          </div>
          <div className="mb-6 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
      </>
    );
  }
);
