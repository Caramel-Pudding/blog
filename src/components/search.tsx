import { memo, FC, FormEvent } from "react";
import Image from "next/image";
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
    <section className={cn("flex", "relative", "w-1/2")}>
      <div className={cn("pt-1", "absolute", "left-6")}>
        <Image
          alt="Search"
          height={28}
          src="/assets/icons/search.svg"
          width={28}
        />
      </div>
      <input
        className={cn(
          "ml-4",
          "w-3/4",
          "rounded-3xl",
          "leading-loose",
          "pl-12",
          "pr-4",
          "bg-accent-1",
          "border-t",
          "border-accent-2"
        )}
        placeholder="Post Title"
        value={value}
        onChange={inputHandler}
      />
    </section>
  );
});
