import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import projects from './schemas/projects'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects, blockContent],
}
