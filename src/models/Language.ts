import { z } from 'zod'
import { getDuplicatesRefinement } from '../util/src/zod.js'
import { identity } from 'lodash-es'

export const LanguageSchema = z.enum(['en']).describe('Language')

export const LanguagesSchema = z.array(LanguageSchema)
  .superRefine(getDuplicatesRefinement('Language', identity))

export type Language = z.infer<typeof LanguageSchema>

export function parseLanguage(language: Language): Language {
  return LanguageSchema.parse(language)
}

export function parseLanguages(languages: Language[]): Language[] {
  return LanguagesSchema.parse(languages)
}
