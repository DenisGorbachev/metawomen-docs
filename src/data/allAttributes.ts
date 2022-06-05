import { parseAttributeUid, Attribute, AttributeSchema } from '../models/Attribute.js'
import { getFinder, getInserter, getName } from '../util/src/zod.js'

export const allAttributes: Attribute[] = []

export const addAttribute = getInserter<Attribute>(getName(AttributeSchema), AttributeSchema, parseAttributeUid, allAttributes)

export const findAttribute = getFinder(parseAttributeUid, allAttributes)

// addAttribute({
//   name: 'Power',
//   default: 1,
// })
