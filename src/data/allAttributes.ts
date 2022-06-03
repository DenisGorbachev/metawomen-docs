import { parseAttributeUid, Attribute, AttributeSchema } from '../models/Attribute'
import { getFinder, getInserter, getName } from 'src/util/src/zod'

export const allAttributes: Attribute[] = []

export const addAttribute = getInserter<Attribute>(getName(AttributeSchema), AttributeSchema, parseAttributeUid, allAttributes)

export const findAttribute = getFinder(parseAttributeUid, allAttributes)

// addAttribute({
//   name: 'Power',
//   default: 1,
// })
