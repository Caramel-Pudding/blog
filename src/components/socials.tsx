import { memo } from "react";
import Image from "next/image";
import cn from "classnames";
import { socials } from "@/consts/socials";

export const Socials: React.FC = memo(() => (
  <article
    className={cn("w-3/4", "lg:w-1/2", "xl:w-2/6", "flex", "justify-between")}
  >
    {socials.map((social) => (
      <a
        key={social.alt}
        className={cn(
          "transition",
          "duration-500",
          "ease-in-out",
          "transform",
          "hover:scale-150"
        )}
        href={social.href}
        target="blank"
      >
        <Image alt={social.alt} height={40} src={social.iconUrl} width={40} />
      </a>
    ))}
  </article>
));
