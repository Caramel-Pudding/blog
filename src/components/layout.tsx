import { memo, FC } from "react";
import { Footer } from "@/components/footer";
import { Meta } from "@/components/meta";
import { Header } from "./header";

export const Layout: FC = memo(({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
});
