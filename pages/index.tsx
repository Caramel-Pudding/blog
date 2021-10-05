import { memo, FC } from 'react'
import {Container} from '../components/container'
import {MoreStories} from '../components/more-stories'
import {HeroPost} from '../components/hero-post'
import {Intro} from '../components/intro'
import {Layout} from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { IPost } from '../types/post'

interface IIndexProps {
  readonly allPosts: IPost[]
}

const Index:FC<IIndexProps> = memo(({ allPosts }) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={false}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              post={heroPost}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
})

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

export default Index