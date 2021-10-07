import { memo, FC } from "react";
import { Footer } from "./footer";
import { Meta } from "./meta";

export const Layout: FC = memo(({ children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
});
