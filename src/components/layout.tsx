import { memo, FC } from "react";
import { Footer } from "@/components/footer";
import { Meta } from "@/components/meta";

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
