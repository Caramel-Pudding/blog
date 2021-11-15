import { memo, FC } from "react";
import cn from "classnames";

export const PostTitle: FC = memo(({ children }) => {
  return (
    <h1
      className={cn(
        "text-5xl",
        "md:text-6xl",
        "lg:text-7xl",
        "font-bold",
        "mb-4"
      )}
    >
      {children}
    </h1>
  );
});
