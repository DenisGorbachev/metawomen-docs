import { z } from 'zod'
import { getDuplicatesRefinement } from '../util/src/zod.js'

export const AttributeSchema = z.object({
  name: z.string().min(1),
  default: z.number().int(),
}).describe('Attribute')

export const AttributesSchema = z.array(AttributeSchema)
  .superRefine(getDuplicatesRefinement('Attribute', parseAttributeUid))

export const AttributeUidSchema = AttributeSchema.pick({
  name: true,
})

export type Attribute = z.infer<typeof AttributeSchema>

export type AttributeUid = z.infer<typeof AttributeUidSchema>

export function parseAttribute(attribute: Attribute): Attribute {
  return AttributeSchema.parse(attribute)
}

export function parseAttributes(attributes: Attribute[]): Attribute[] {
  return AttributesSchema.parse(attributes)
}

export function parseAttributeUid(attributeUid: AttributeUid): AttributeUid {
  return AttributeUidSchema.parse(attributeUid)
}
