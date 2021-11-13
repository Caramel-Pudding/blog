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
            "px-8",
            "py-4",
            "rounded-3xl",
            "border-2",
            `border-donate`,
            `hover:bg-donate`,
            `bg-donate`,
            "bg-opacity-50",
            "text-white",
            "text-3xl",
            "font-bold"
          )}
          type="button"
        >
          I NEED A DOLLAR!
        </button>
      </section>
    </div>
  );
});
