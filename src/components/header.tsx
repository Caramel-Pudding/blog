import { memo, FC } from "react";
import cn from "classnames";
import Link from "next/link";

export const Header: FC = memo(() => {
  return (
    <header className={cn("w-full", "flex", "justify-center")}>
      <h2 className={cn("text-2xl", "md:text-4xl", "font-bold", "mb-8 mt-8")}>
        <Link href="/">
          <a className="hover:underline">BLOG</a>
        </Link>
      </h2>
    </header>
  );
});
