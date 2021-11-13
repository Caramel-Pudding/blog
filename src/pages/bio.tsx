import { memo, FC } from "react";
import Head from "next/head";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Layout } from "@/components/layout";
import { bioPostStub } from "@/consts/bio-post-stub";

const Post: FC = memo(() => {
  return (
    <Layout>
      <Container>
        <Header />
        <article className="mb-32">
          <Head>
            <title>Author page</title>
            <meta content={bioPostStub.ogImage?.url} property="og:image" />
          </Head>
          Hello, world!
        </article>
      </Container>
    </Layout>
  );
});

export default Post;
