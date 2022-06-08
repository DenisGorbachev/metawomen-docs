import { Language } from '../models/Language.js'
import { readFile } from 'fs/promises'
import { rootDirname } from '../../root.js'

export function getFilename(language: Language, folder: string, name: string) {
  return `${folder}/${name}.${language}.generated.md`
}

export async function getLang(name: string) {
  const raw = await readFile(`${rootDirname}/i18n/common.${name}.json`)
  return JSON.parse(raw.toString())
}
