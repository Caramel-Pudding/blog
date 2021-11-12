import { memo, FC, FormEvent } from "react";
import cn from "classnames";

interface ISearchProps {
  readonly handler: (input: string) => void;
  readonly value: string;
}

export const Search: FC<ISearchProps> = memo(({ handler, value }) => {
  const inputHandler = (event: FormEvent<HTMLInputElement>) => {
    handler(event.currentTarget.value);
  };

  return (
    <section className={cn("flex", "justify-center")}>
      <label className={cn("w-1/2")}>
        SEARCH
        <input
          className={cn(
            "ml-4",
            "w-3/4",
            "rounded-3xl",
            "leading-loose",
            "px-4",
            "bg-accent-1",
            "border-t",
            "border-accent-2"
          )}
          placeholder="Post Title"
          value={value}
          onChange={inputHandler}
        />
      </label>
    </section>
  );
});
