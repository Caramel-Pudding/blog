import { memo, FC } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import cn from "classnames";
import { ParsedUrlQuery } from "querystring";
import { Container } from "@/components/container";
import { PostBody } from "@/components/post-body";
import { Header } from "@/components/header";
import { PostHeader } from "@/components/post-header";
import { Layout } from "@/components/layout";
import { getPostBySlug, getAllPosts } from "@/lib/api";
import { PostTitle } from "@/components/post-title";
import { markdownToHtml } from "@/lib/markdown-to-html";
import { IPost } from "@/types/post";

interface IPostProps {
  readonly post: IPost;
}

const Post: FC<IPostProps> = memo(({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>{post.title} | Blog Template</title>
        <meta content={post.ogImage?.url} property="og:image" />
      </Head>
      <Layout>
        <Container>
          <Header />
          {router.isFallback || !post.content ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article className="mb-32">
                <PostHeader
                  coverImage={post.coverImage}
                  date={post.date}
                  title={post.title}
                />
                <PostBody content={post.content} />
                <section className={cn("flex", "justify-center")}>
                  <button
                    className={cn(
                      "w-1/2",
                      "lg:w-1/4",
                      "px-8",
                      "py-4",
                      "rounded-l-full",
                      "border-2",
                      `border-subscribe`,
                      `hover:bg-subscribe`,
                      `bg-subscribe`,
                      "bg-opacity-80",
                      "text-white",
                      "text-3xl",
                      "font-bold"
                    )}
                    type="button"
                  >
                    Subscribe!
                  </button>
                  <button
                    className={cn(
                      "w-1/2",
                      "lg:w-1/4",
                      "px-8",
                      "py-4",
                      "rounded-r-full",
                      "border-2",
                      `border-donate`,
                      `hover:bg-donate`,
                      `bg-donate`,
                      "bg-opacity-80",
                      "text-white",
                      "text-3xl",
                      "font-bold"
                    )}
                    type="button"
                  >
                    Donate!
                  </button>
                </section>
              </article>
            </>
          )}
        </Container>
      </Layout>
    </>
  );
});

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;
  const post = getPostBySlug(slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export default Post;
