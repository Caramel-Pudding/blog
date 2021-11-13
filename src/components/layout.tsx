import { memo, FC } from "react";
import { Footer } from "@/components/footer";
import { Meta } from "@/components/meta";
import { Socials } from "./socials";

export const Layout: FC = memo(({ children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Socials />
        <main className="px-24">{children}</main>
      </div>
      <Footer />
    </>
  );
});
