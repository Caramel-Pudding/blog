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
            <section
              className={cn(
                "flex",
                "flex-col",
                "items-center",
                "md:flex-row",
                "justify-around",
                "mb-12"
              )}
            >
              <article className={cn("w-full", "md:w-1/2")}>
                <Image
                  alt="Author Image"
                  className={cn("rounded-3xl")}
                  height={600}
                  src="/assets/bio/portrait.jpg"
                  width={500}
                />
              </article>
              <section className={cn("w-full", "md:w-1/2")}>
                <h2 className={cn("text-5xl", "text-center", "mb-8")}>
                  Привет, я - Антон!
                </h2>
                <div className={cn("text-justify", "mb-8")}>
                  Меня зовут Антон Назаров. С 2017 года идентифицирую себя как
                  iOS разработчик. Посидел в Apple (контрактором), Glovo,
                  Tiffany &amp; Co, Autodesk. Умею в реактивщину, графику и,
                  конечно, в хорошую архитектуру.
                </div>
                <div className={cn("text-xl", "text-center", "mb-8")}>
                  <a
                    className="underline"
                    href="https://drive.google.com/drive/folders/1ItEgCnLYCiaaZIDw450lHGeeHXAbHjBl?usp=sharing"
                  >
                    Мое резюме
                  </a>
                  .
                </div>
                <div className={cn("text-justify", "mb-8")}>
                  Своим талантом считаю умение подмечать неудобную правду и не
                  бояться ее высмеивать, поэтому и существует этот блог.
                  Основополагающим делом жизни является публичное говорение
                  ртом. Получается это у меня хорошо, поэтому я успел стать
                  преподавателем в универе, автором подкаста, стендап-комиком,
                  докладчиком, ведущим зала и ведущим корпоратива. Вот портфолио
                  моих выступлений, а если вам захочется разбавить свое
                  мероприятие нескучным контентом, просто пишите в телеграмм.
                </div>
              </section>
            </section>
            <section>
              <h2 className={cn("text-4xl", "text-center", "mb-8")}>
                А ещё я люблю переодеваться!
              </h2>
              <section
                className={cn(
                  "grid",
                  "grid-cols-1",
                  "lg:grid-cols-2",
                  "xl:grid-cols-3",
                  "gap-4",
                  "mb-24"
                )}
              >
                {bioImages.map((image) => (
                  <Image
                    key={image}
                    alt="Author Image"
                    className={cn("rounded-3xl")}
                    height={450}
                    src={`/assets/bio/${image}`}
                    width={400}
                  />
                ))}
              </section>
            </section>
            <section>
              <h2 className={cn("text-4xl", "text-center", "mb-8")}>
                Мои выступления
              </h2>
              <section
                className={cn(
                  "grid",
                  "justify-items-center",
                  "grid-cols-1",
                  "lg:grid-cols-2",
                  "gap-12",
                  "mb-24"
                )}
              >
                {bioVideos.map((videoUrl) => (
                  <iframe
                    key={videoUrl}
                    allow="fullscreen;"
                    className="w-full"
                    frameBorder="0"
                    height="400"
                    src={videoUrl}
                    title="RickRoll"
                  />
                ))}
              </section>
            </section>
          </section>
        </Container>
      </Layout>
    </>
  );
});

export default Post;
