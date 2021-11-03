import { memo, FC } from "react";
import cn from "classnames";
import { Container } from "@/components/container";
import { Socials } from "./socials";

export const Footer: FC = memo(() => {
  return (
    <footer className={cn("bg-accent-1", "border-t", "border-accent-2")}>
      <Container>
        <div className={cn("py-10", "flex", "justify-center", "items-center")}>
          <Socials />
        </div>
      </Container>
    </footer>
  );
});
