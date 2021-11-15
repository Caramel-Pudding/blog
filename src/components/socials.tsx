import { memo } from "react";
import Image from "next/image";
import cn from "classnames";
import { mail, socials } from "@/consts/socials";

export const Socials: React.FC = memo(() => (
  <article className={cn("w-1/2", "lg:w-1/6", "flex", "justify-between")}>
    <a href={`mailto:${mail}`}>
      <Image
        alt="e-mail"
        className={cn(
          "transition",
          "duration-500",
          "ease-in-out",
          "transform",
          "hover:scale-150"
        )}
        height={36}
        src="/assets/icons/email.svg"
        width={36}
      />
    </a>
    {socials.map((social) => (
      <a href={social.href} target="blank">
        <Image
          alt={social.alt}
          className={cn(
            "transition",
            "duration-500",
            "ease-in-out",
            "transform",
            "hover:scale-150"
          )}
          height={36}
          src={social.iconUrl}
          width={36}
        />
      </a>
    ))}
  </article>
));
