import { memo, FC, useState } from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Container } from "@/components/container";
import { MoreStories } from "@/components/more-stories";
import { HeroPost } from "@/components/hero-post";
import { Search } from "@/components/search";
import { Layout } from "@/components/layout";
import { getAllPosts } from "@/lib/api";
import { IPost } from "@/types/post";

interface IIndexProps {
  readonly allPosts: IPost[];
}

const Index: FC<IIndexProps> = memo(({ allPosts }) => {
  const [searchField, setSearchField] = useState<string>("");
  const [posts, setPosts] = useState<IPost[]>(allPosts);

  const filterByTitle = (value: string): IPost[] => {
    return allPosts.filter((post) => post.title.includes(value));
  };

  const filterByTag = (value: string): IPost[] => {
    return allPosts.filter(
      (post) => !!post.tags?.filter((tag) => tag.includes(value)).length
    );
  };

  const filterPosts = (value: string): IPost[] => {
    let filteredPosts: IPost[];

    if (!value) {
      filteredPosts = allPosts;
    } else if (value[0] === "#") {
      filteredPosts = filterByTag(value);
    } else {
      filteredPosts = filterByTitle(value);
    }

    return filteredPosts;
  };

  const search = (value: string) => {
    const filteredPosts = filterPosts(value);
    setPosts(filteredPosts);
    setSearchField(value);
  };

  const heroPost = posts[0];
  const morePosts = posts.slice(1);

  return (
    <>
      <Layout>
        <Head>
          <title>Blog Template</title>
        </Head>
        <Container>
          <Search handler={search} value={searchField} />
          {heroPost && <HeroPost post={heroPost} searchByTag={search} />}
          {morePosts.length > 0 && (
            <MoreStories posts={morePosts} searchByTag={search} />
          )}
        </Container>
      </Layout>
    </>
  );
});

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "tags",
  ]);

  return {
    props: { allPosts },
  };
};

export default Index;
