import { memo, FC } from "react";
import cn from "classnames";
import { Container } from "@/components/container";
import { Socials } from "./socials";

export const Footer: FC = memo(() => (
  <footer className={cn("bg-accent-1", "border-t", "border-accent-2")}>
    <Container>
      <section className={cn("flex", "justify-between", "py-8", "px-16")}>
        <Socials />
        <section>
          <div>
            Made by{" "}
            <a
              className="underline"
              href="linkedin.com/in/eric-kuznetsov-953089177/"
            >
              Eric Kuznetsov
            </a>
            , a humble Frontend dev.
          </div>
          <hr />
          <div>
            You can find the template of this blog on my{" "}
            <a
              className="underline"
              href="https://github.com/Caramel-Pudding/blog"
            >
              GitHub.
            </a>
          </div>
        </section>
      </section>
    </Container>
  </footer>
));
