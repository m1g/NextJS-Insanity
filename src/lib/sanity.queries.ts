import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
export const servicesQuery =  groq`*[_type == "service"]{
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  url,
  content,
}`

export async function getPosts(client: SanityClient): Promise<Post[]> {
  return await client.fetch(postsQuery)
}

export async function getServices(client: SanityClient) {
  return await client.fetch(servicesQuery)
}

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`
export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0]`

export async function getPost(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  return await client.fetch(postBySlugQuery, {
    slug,
  })
}

export async function getService(
  client: SanityClient,
  slug: string,
): Promise<Service> {
  return await client.fetch(serviceBySlugQuery, {
    slug,
  })
}

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`
export const serviceSlugsQuery = groq`
*[_type == "service" && defined(slug.current)][].slug.current
`

export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
}

export interface Service {
  _id: string
  _createdAt: string
  name?: string
  slug: Slug
  image?: string
  url?: string
  content?: PortableTextBlock[]
}
