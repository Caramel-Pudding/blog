import { memo, FC } from "react";
import cn from "classnames";
import { Container } from "@/components/container";
import { Socials } from "./socials";

export const Footer: FC = memo(() => {
  return (
    <footer className={cn("bg-accent-1", "border-t", "border-accent-2")}>
      <Container>
        <section className={cn("flex", "justify-between", "py-8")}>
          <Socials />
          <div>Made by Me</div>
        </section>
      </Container>
    </footer>
  );
});
