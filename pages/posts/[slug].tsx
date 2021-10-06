import { memo, FC } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { Container } from "../../components/container";
import { PostBody } from "../../components/post-body";
import { Header } from "../../components/header";
import { PostHeader } from "../../components/post-header";
import { Layout } from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import { PostTitle } from "../../components/post-title";
import { CMS_NAME } from "../../lib/constants";
import { markdownToHtml } from "../../lib/markdown-to-html";
import { IPost } from "../../types/post";

interface IPostProps {
  readonly post: IPost;
  readonly preview: boolean;
}

const Post: FC<IPostProps> = memo(({ post, preview }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback || !post.content ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta content={post.ogImage?.url} property="og:image" />
              </Head>
              <PostHeader
                author={post.author}
                coverImage={post.coverImage}
                date={post.date}
                title={post.title}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
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
