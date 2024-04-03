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
export const heroesQuery =  groq`*[_type == "hero"]{
  _id,
  _createdAt,
  event,
  "slug": slug.current,
  "image": image.asset->url,
  content,
}`

export async function getPosts(client: SanityClient): Promise<Post[]> {
  return await client.fetch(postsQuery)
}

export async function getServices(client: SanityClient) {
  return await client.fetch(servicesQuery)
}

export async function getHeroes(client: SanityClient): Promise<Hero[]> {
  return await client.fetch(heroesQuery)
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

export interface Hero {
  _id: string
  _createdAt: string
  event?: string
  slug: Slug
  image?: string
  url?: string
  content?: PortableTextBlock[]
}