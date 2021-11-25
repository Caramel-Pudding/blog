import { memo, FC } from "react";
import Head from "next/head";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Layout } from "@/components/layout";
import { bioPostStub } from "@/consts/bio-post-stub";
import { bioImages, bioNonTechVideos, bioTechVideos } from "@/consts/bio-media";
import { VideoGrid } from "@/components/video-grid";
import { ImageGrid } from "@/components/image-grid";
import { BioHead } from "@/components/bio-head";

const Post: FC = memo(() => {
  return (
    <>
      <Head>
        <title>Author page</title>
        <meta content={bioPostStub.ogImage?.url} property="og:image" />
      </Head>
      <Layout>
        <Container>
          <Header />
          <section className="mb-32">
            <BioHead />
            <VideoGrid title="Технические выступления" videos={bioTechVideos} />
            <ImageGrid
              images={bioImages}
              title="А ещё я люблю переодеваться!"
            />
            <VideoGrid
              title="Нетехнические выступления"
              videos={bioNonTechVideos}
            />
          </section>
        </Container>
      </Layout>
    </>
  );
});

export default Post;
