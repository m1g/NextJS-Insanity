import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import hero from './hero'
import post from './post'
import service from './service'

export const schemaTypes = [post, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, service, hero, blockContent],
}
