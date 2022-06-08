import { Arguments, Argv } from 'yargs'
import { getCommandName } from '../util/src/yargs.js'
import { together } from '../util/src/promise.js'
import { loadEnv } from '../util/src/env.js'
import { mkdirIfNoxExists, Path, readFileAsString } from '../util/src/filesystem.js'
import { readFile, writeFile } from 'fs/promises'
import { impl } from '../util/src/todo.js'
import { flatten, range } from 'lodash-es'
import { getMinExperienceForUpgrade, getMinTokenAmountForUpgrade, getTokenAmountForFreezePerDayFloored, getTokenMinedAmountMax, getTokenMinedAmountMin } from '../formulas.js'
import { nail } from '../util/src/string.js'
import { markdownTable } from 'markdown-table'
import { fileURLToPath } from 'url'
import { Language, LanguageSchema, parseLanguage } from '../models/Language.js'
import { rootDirname } from '../../root.js'
import { getFilename, getLang } from './utils.js'
import { getTable } from './writeDataSheets.js'
import { dirname } from 'path'
import { ensure } from '../util/src/ensure.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = fileURLToPath(new URL('.', import.meta.url))

export const command = getCommandName(__filename)

export const describe = 'Write code'

export const builder = function (argv: Argv) {
  return argv
    .option('language', {
      alias: 'l',
      string: true,
      requiresArg: true,
      demandOption: true,
      choices: LanguageSchema.options,
    })
    .option('folder', {
      alias: 'f',
      string: true,
      requiresArg: true,
      demandOption: true,
    })
}

export interface Args extends Arguments {
  language: string
  folder: string
}

export const handler = async function (args: Args) {
  const { folder, language } = args
  const env = await loadEnv()
  const $language = parseLanguage(language as Language)
  await mkdirIfNoxExists(folder)
  await writeCode($language, folder)
}

export async function writeCode(language: Language, folder: Path) {
  return together([
    writeFormulas,
  ], language, folder)
}

export async function writeFormulas(language: Language, folder: Path) {
  const baseFilename = 'Formulas'
  const code = await readFileAsString(`${rootDirname}/src/formulas.ts`)
  return writeCodeFile(language, folder, baseFilename, code)
}

export async function writeCodeFile(language: Language, folder: string, baseFilename: string, code: string) {
  const lang = await getLang(language)
  const filename = getFilename(language, folder, baseFilename)
  const header = ensure(lang[baseFilename])
  const content = `
# ${header}
  
\`\`\`typescript
${code}
\`\`\`
`.trim() + '\n'
  console.info(filename)
  return writeFile(filename, content)
}
