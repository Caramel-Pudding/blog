import { memo, FC } from "react";
import { Alert } from "./alert";
import { Footer } from "./footer";
import { Meta } from "./meta";

interface ILayoutPrpops {
  readonly preview: boolean;
}

export const Layout: FC<ILayoutPrpops> = memo(({ preview, children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
});
