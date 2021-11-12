import { memo, FC, MouseEvent } from "react";
import cn from "classnames";

interface ISearchProps {
  readonly tag: string;
  readonly clickHandler: (tag: string) => void;
  readonly isChosen: boolean;
}

export const TagButton: FC<ISearchProps> = memo(
  ({ tag, clickHandler, isChosen }) => {
    const tagClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      clickHandler(tag);
    };

    return (
      <button
        key={tag}
        className={cn(
          "px-2",
          "rounded-3xl",
          "border-2",
          `border-${tag}`,
          `hover:bg-${tag}`,
          "text-white",
          "font-bold",
          `bg-${tag}`,
          {
            "bg-opacity-50": !isChosen,
          }
        )}
        type="button"
        onClick={(event) => tagClickHandler(event)}
      >
        {tag}&nbsp;
      </button>
    );
  }
);
