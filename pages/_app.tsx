import { memo, FC } from "react";
import type { AppProps } from "next/app";

import "../styles/index.css";

const MyApp: FC<AppProps> = memo(({ Component, pageProps }) => {
  return <Component {...pageProps} />;
});

export default MyApp;
