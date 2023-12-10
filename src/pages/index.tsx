import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'

import Navbar from '~/components/Navbar'
import Card from '~/components/Card'
import Container from '~/components/Container'
import Services from '~/components/Services'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getPosts, type Post, type Service, postsQuery, getServices, servicesQuery } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'
import HeroSection from '~/components/HeroSection'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    posts: Post[],
    services: Service[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const posts = await getPosts(client)
  const services = await getServices(client);

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
      services
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const [posts] = useLiveQuery<Post[]>(props.posts, postsQuery)
  const [services] = useLiveQuery(props.services, servicesQuery)
  return (
    <>
      <Navbar />
      <HeroSection />
      <Container>
        <section>
          {posts.length ? (
            posts.map((post) => <Card key={post._id} post={post} />)
          ) : (
            <Services services={services} />
          )}
        </section>
      </Container>
    </>
    
  )
}
