import { memo, FC, useState } from "react";
import cn from "classnames";
import { TagButton } from "./tag-button";

interface ISearchProps {
  readonly handler: (input: string) => void;
  readonly value: string;
  readonly availableTags: string[];
}

export const TagsCloud: FC<ISearchProps> = memo(
  ({ handler, value, availableTags }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleShowMoreClick = () => {
      setIsOpen(!isOpen);
    };

    const showableTags = isOpen ? availableTags : availableTags.slice(0, 5);

    return (
      <section
        className={cn("flex", "flex-col", "justify-center", "mb-12", "w-1/2")}
      >
        <section
          className={cn(
            "flex",
            "flex-wrap",
            "flex-row",
            "justify-center",
            "mb-4"
          )}
        >
          {showableTags.map((tag) => (
            <TagButton
              key={tag}
              clickHandler={handler}
              isChosen={tag === value}
              tag={tag}
            />
          ))}
        </section>

        <button type="button" onClick={handleShowMoreClick}>
          {isOpen ? "Show Less, please!" : "Show More"}
        </button>
      </section>
    );
  }
);
