import { memo, FC } from "react";

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
    </div>
  );
});
