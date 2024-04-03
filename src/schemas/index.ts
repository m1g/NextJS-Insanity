import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import post from './post'
import service from './service'
import hero from './hero'

export const schemaTypes = [post, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, service, hero, blockContent],
}
