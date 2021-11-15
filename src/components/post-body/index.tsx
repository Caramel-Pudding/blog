import { memo, FC } from "react";
import cn from "classnames";

import styles from "./styles.module.css";

interface IPostBodyProps {
  readonly content: string;
}

export const PostBody: FC<IPostBodyProps> = memo(({ content }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <article
        className={styles.markdown}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <section className={cn("flex", "justify-center")}>
        <button
          className={cn(
            "w-1/2",
            "px-8",
            "py-4",
            "rounded-l-full",
            "border-2",
            `border-subscribe`,
            `hover:bg-subscribe`,
            `bg-subscribe`,
            "bg-opacity-80",
            "text-white",
            "text-3xl",
            "font-bold"
          )}
          type="button"
        >
          Subscribe!
        </button>
        <button
          className={cn(
            "w-1/2",
            "px-8",
            "py-4",
            "rounded-r-full",
            "border-2",
            `border-donate`,
            `hover:bg-donate`,
            `bg-donate`,
            "bg-opacity-80",
            "text-white",
            "text-3xl",
            "font-bold"
          )}
          type="button"
        >
          Donate!
        </button>
      </section>
    </div>
  );
});
