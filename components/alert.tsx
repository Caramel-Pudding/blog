import cn from "classnames";
import { memo, FC } from "react";
import { Container } from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

interface IAlertProps {
  readonly preview: boolean;
}

export const Alert: FC<IAlertProps> = memo(({ preview }) => {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{" "}
              <a
                className="underline hover:text-cyan duration-200 transition-colors"
                href="/api/exit-preview"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{" "}
              <a
                className="underline hover:text-success duration-200 transition-colors"
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
});
