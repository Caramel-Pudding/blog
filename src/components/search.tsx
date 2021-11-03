import { memo, FC, FormEvent } from "react";

interface ISearchProps {
  readonly handler: (input: string) => void;
  readonly value: string;
}

export const Search: FC<ISearchProps> = memo(({ handler, value }) => {
  const inputHandler = (event: FormEvent<HTMLInputElement>) => {
    handler(event.currentTarget.value);
  };

  return (
    <label>
      Search
      <input
        className="bg-accent-1 border-t border-accent-2"
        placeholder="Title or #Tag"
        value={value}
        onChange={inputHandler}
      />
    </label>
  );
});
