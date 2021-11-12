import { memo, FC, useState } from "react";
import { GetStaticProps } from "next";
import cn from "classnames";
import Head from "next/head";
import { Container } from "@/components/container";
import { MoreStories } from "@/components/more-stories";
import { HeroPost } from "@/components/hero-post";
import { TagsCloud } from "@/components/tags-cloud";
import { Layout } from "@/components/layout";
import { getAllPosts } from "@/lib/api";
import { IPost } from "@/types/post";
import { Search } from "@/components/search";

interface IIndexProps {
  readonly allPosts: IPost[];
}

const Index: FC<IIndexProps> = memo(({ allPosts }) => {
  const [searchField, setSearchField] = useState<string>("");
  const [chosenTag, setChosenTag] = useState<string>("");
  const [posts, setPosts] = useState<IPost[]>(allPosts);

  const availableTags: string[] = [
    ...new Set([...allPosts.map((post) => post.tags)].flat()),
  ];

  const filterByTitle = (value: string): IPost[] => {
    return !value
      ? allPosts
      : allPosts.filter((post) => post.title.includes(value));
  };

  const filterByTag = (value: string): IPost[] => {
    return !value
      ? allPosts
      : allPosts.filter(
          (post) => !!post.tags?.filter((tag) => tag.includes(value)).length
        );
  };

  const searchByTitle = (value: string) => {
    const filteredPosts = filterByTitle(value);
    setPosts(filteredPosts);
    setSearchField(value);
  };

  const searchByTag = (value: string) => {
    if (value === chosenTag) {
      setChosenTag("");
      setPosts(allPosts);
    } else {
      const filteredPosts = filterByTag(value);
      setPosts(filteredPosts);
      setChosenTag(value);
    }
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
          <section className={cn("my-8")}>
            <Search handler={searchByTitle} value={searchField} />
          </section>
          <section className={cn("flex", "justify-center", "my-8")}>
            <TagsCloud
              availableTags={availableTags}
              handler={searchByTag}
              value={chosenTag}
            />
          </section>
          {heroPost && <HeroPost post={heroPost} searchByTag={searchByTag} />}
          {morePosts.length > 0 && (
            <MoreStories
              chosenTag={chosenTag}
              posts={morePosts}
              searchByTag={searchByTag}
            />
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
