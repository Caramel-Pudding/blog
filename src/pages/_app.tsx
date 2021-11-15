import { memo, FC, useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import * as gtag from "@/lib/ga";

import "@/styles/index.css";

const MyApp: FC<AppProps> = memo(({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
});

export default MyApp;
