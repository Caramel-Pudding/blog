import { memo, FC } from "react";
import cn from "classnames";
import { Container } from "@/components/container";

export const Footer: FC = memo(() => {
  return (
    <footer className={cn("bg-accent-1", "border-t", "border-accent-2")}>
      <Container>
        <div>Made by Me</div>
      </Container>
    </footer>
  );
});
