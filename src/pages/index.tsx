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
import { EmptySearchStub } from "@/components/empty-search-stub";

interface IIndexProps {
  readonly allPosts: IPost[];
}

const Index: FC<IIndexProps> = memo(({ allPosts }) => {
  const [chosenTag, setChosenTag] = useState<string>("");
  const [searchField, setSearchField] = useState<string>("");

  const availableTags: string[] = [
    ...new Set([...allPosts.map((post) => post.tags)].flat()),
  ];

  const filterByTag = (posts: IPost[]): IPost[] => {
    return !chosenTag
      ? posts
      : posts.filter(
          (post) => !!post.tags?.filter((tag) => tag.includes(chosenTag)).length
        );
  };

  const filterByTitle = (posts: IPost[]): IPost[] => {
    return !searchField
      ? posts
      : posts.filter((post) => post.title.includes(searchField));
  };

  const postsToShow: IPost[] = filterByTitle(filterByTag(allPosts));

  const searchByTag = (value: string) => {
    if (value === chosenTag) {
      setChosenTag("");
    } else {
      setChosenTag(value);
    }
  };

  const heroPost = postsToShow[0];
  const morePosts = postsToShow.slice(1);

  return (
    <>
      <Layout>
        <Head>
          <title>Blog Template</title>
        </Head>
        <Container>
          <section className={cn("flex", "justify-center", "my-8")}>
            <Search
              handler={(value) => setSearchField(value)}
              value={searchField}
            />
          </section>
          <section className={cn("flex", "justify-center", "my-8")}>
            <TagsCloud
              availableTags={availableTags}
              handler={searchByTag}
              value={chosenTag}
            />
          </section>
          {!heroPost && morePosts.length === 0 && (
            <section className={cn("flex", "justify-center")}>
              <EmptySearchStub />
            </section>
          )}
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
