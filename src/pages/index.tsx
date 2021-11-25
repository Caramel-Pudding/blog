import { memo, FC, useState } from "react";
import { GetStaticProps } from "next";
import cn from "classnames";
import Head from "next/head";
import { Container } from "@/components/container";
import { MoreStories } from "@/components/more-stories";
import { TagsCloud } from "@/components/tags-cloud";
import { Layout } from "@/components/layout";
import { getAllPosts } from "@/lib/api";
import { IPost } from "@/types/post";
import { Search } from "@/components/search";
import { EmptySearchStub } from "@/components/empty-search-stub";
import { PostPreview } from "@/components/post-preview";
import { bioPostStub } from "@/consts/bio-post-stub";

interface IIndexProps {
  readonly allPosts: ReadonlyArray<IPost>;
}

const Index: FC<IIndexProps> = memo(({ allPosts }) => {
  const [chosenTag, setChosenTag] = useState<string>("");
  const [searchField, setSearchField] = useState<string>("");

  const availableTags: ReadonlyArray<string> = [
    ...new Set([...allPosts.map((post) => post.tags)].flat()),
  ];

  const searchByTag = (value: string) => {
    if (value === chosenTag) {
      setChosenTag("");
    } else {
      setChosenTag(value);
    }
  };

  const filterByTag = (posts: ReadonlyArray<IPost>): ReadonlyArray<IPost> => {
    return !chosenTag
      ? posts
      : posts.filter(
          (post) => !!post.tags?.filter((tag) => tag.includes(chosenTag)).length
        );
  };

  const filterByTitle = (posts: ReadonlyArray<IPost>): ReadonlyArray<IPost> => {
    return !searchField
      ? posts
      : posts.filter((post) => post.title.includes(searchField));
  };

  const postsToShow: ReadonlyArray<IPost> = filterByTitle(
    filterByTag(allPosts)
  );
  const heroPost = chosenTag ? postsToShow[0] : bioPostStub;
  const morePosts = postsToShow.slice(1);

  return (
    <>
      <Head>
        <title>Blog Template</title>
      </Head>
      <Layout>
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
          {heroPost && (
            <section className={cn("flex", "justify-center", "mb-24")}>
              <PostPreview
                chosenTag={chosenTag}
                isBio={!chosenTag}
                isHeroPost
                post={heroPost}
                searchByTag={searchByTag}
                sizes={{ width: 1440, height: 620 }}
              />
            </section>
          )}
          {morePosts.length === 0 && (
            <section className={cn("flex", "justify-center")}>
              <EmptySearchStub />
            </section>
          )}
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
