import { memo, FC } from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import {Container} from '../../components/container'
import {PostBody} from '../../components/post-body'
import {Header} from '../../components/header'
import {PostHeader} from '../../components/post-header'
import {Layout} from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import {PostTitle} from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import { IPost } from '../../types/post'

interface IPostProps {
  readonly post: IPost;
  readonly morePosts: IPost[];
  readonly preview: boolean
}

const Post: FC<IPostProps> = memo(({ post, morePosts, preview }) => {
  const router = useRouter()
  console.log(post)
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {(router.isFallback || !post.content) ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property="og:image" content={post.ogImage?.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
})


interface GetStaticPropsParams {
  params: {
    slug: string;
  }
}

export async function getStaticProps({ params }: GetStaticPropsParams) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default Post
