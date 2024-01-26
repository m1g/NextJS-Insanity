import { getClient } from '~/lib/sanity.client'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PortableText } from '@portabletext/react'
import { useLiveQuery } from 'next-sanity/preview'
import {
  getService,
  type Service,
  serviceBySlugQuery,
  serviceSlugsQuery,
} from '~/lib/sanity.queries'
import { readToken } from '~/lib/sanity.api'
import type { SharedPageProps } from '~/pages/_app'
import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'
import Container from '~/components/Container'
import Navbar from '~/components/Navbar'


interface Query {
  [key: string]: string
}

export const getStaticProps: GetStaticProps<SharedPageProps & {service: Service}, Query> = async ({ draftMode = false, params = {} }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const service = await getService(client, params.slug)

  if (!service) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      service,
    },
  }
}

export default function Service( props: InferGetStaticPropsType<typeof getStaticProps>){
  const [service] = useLiveQuery(props.service, serviceBySlugQuery, {
    slug: props.service.slug.current,
  })

  return (
    <>
      <Navbar />
      <Container>
        <header className='flex flex-col md:flex-row items-center justify-between'>
          <h1 className='text-3xl drop-shadow font-extrabold'>{service.name}</h1>
          <a 
            href="http://instagram.com/10flowersyoga" // service url for registering
            title="visit the community" // register for service
            target="_blank"
            rel="noopener noreferrer"
            className='bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-blue-600 hover:text-blue-200 mt-3 md:mt-0'
          >
            Visit the community
          </a>
        </header>
        <main className='text-lg text-gray-700 mt-5'>
          <PortableText value={service.content} />
        </main>
        <Image
          // @ts-ignore
          src={urlForImage(service.image).width(1920).height(800).url()}
          alt={service.name}
          width={1920}
          height={750}
          className='mt-10 border-2 border-gray-700 object-cover rounded-xl'
        />
        <footer><h2 className='text-xl font-extrabold text-gray-500 mt-10'>Online registration coming soon!</h2></footer>
      </Container>  
    </>
  )
}

export const getStaticPaths = async () => {
  const client = getClient()
  const slugs = await client.fetch(serviceSlugsQuery)

  return {
    paths: slugs?.map(({ slug }) => `/services/${slug}`) || [],
    fallback: 'blocking',
  }
}