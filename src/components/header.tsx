import { memo, FC } from "react";
import Link from "next/link";

export const Header: FC = memo(() => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">Blog Template</a>
      </Link>
    </h2>
  );
});