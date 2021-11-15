import { memo, FC } from "react";
import Head from "next/head";
import Image from "next/image";
import cn from "classnames";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Layout } from "@/components/layout";
import { bioPostStub } from "@/consts/bio-post-stub";
import { bioImages, bioVideos } from "@/consts/bio-media";

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
            <section className={cn("flex", "justify-around", "mb-24")}>
              <Image
                alt="Author Image"
                height={600}
                src="/assets/bio/baklan.jpg"
                width={600}
              />
              <section>
                <h1 className={cn("text-5xl")}>Привет, я - Баклан!</h1>
                <span>Хто я?</span>
                <ul>
                  <li>Животное</li>
                  <li>Птица</li>
                  <li>Хороший друг</li>
                  <li>И незаменимый товарищ</li>
                </ul>
              </section>
            </section>
            <section
              className={cn(
                "grid",
                "justify-items-center",
                "grid-cols-1",
                "lg:grid-cols-3",
                "xl:grid-cols-5",
                "gap-x-4",
                "lg:gap-x-8",
                "xl:gap-x-12",
                "gap-y-4",
                "lg:gap-y-8",
                "xl:gap-y-12",
                "mb-24"
              )}
            >
              {bioImages.map((image) => (
                <Image
                  key={image}
                  alt="Author Image"
                  height={200}
                  src={`/assets/bio/${image}`}
                  width={200}
                />
              ))}
            </section>
            <div className={cn("flex", "justify-center")}>
              <section className={cn("flex", "flex-col")}>
                <h2>Мои выступления</h2>
                {bioVideos.map((videoUrl) => (
                  <iframe
                    key={videoUrl}
                    allow="fullscreen;"
                    frameBorder="0"
                    height="315"
                    src={videoUrl}
                    title="RickRoll"
                    width="420"
                  />
                ))}
              </section>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
});

export default Post;
