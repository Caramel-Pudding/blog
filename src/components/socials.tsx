import { memo } from "react";
import Image from "next/image";
import cn from "classnames";
import { myMail, myGitHub, myLinkedIn } from "@/consts/adresses";

export const Socials: React.FC = memo(() => (
  <article className={cn("w-1/6", "flex", "justify-between")}>
    <a href={`mailto:${myMail}`}>
      <Image
        alt="e-mail"
        height={36}
        src="/assets/icons/email.svg"
        width={36}
      />
    </a>
    <a href={myGitHub} target="blank">
      <Image
        alt="GitHub"
        height={36}
        src="/assets/icons/github.svg"
        width={36}
      />
    </a>
    <a href={myLinkedIn} target="blank">
      <Image
        alt="LinkedIn"
        height={36}
        src="/assets/icons/linkedin.svg"
        width={36}
      />
    </a>
  </article>
));
