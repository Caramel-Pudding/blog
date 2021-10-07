import { memo, FC } from "react";
import { Container } from "@/components/container";

export const Footer: FC = memo(() => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          Hello There
        </div>
      </Container>
    </footer>
  );
});
