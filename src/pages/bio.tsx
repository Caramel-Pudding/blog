import { memo, FC } from "react";
import cn from "classnames";
import { Container } from "@/components/container";

const Footer: FC = memo(() => {
  return (
    <footer className={cn("bg-accent-1", "border-t", "border-accent-2")}>
      <Container>
        <section className={cn("flex", "justify-center", "py-8")}>
          <div>Made by Me</div>
        </section>
      </Container>
    </footer>
  );
});

export default Footer;
