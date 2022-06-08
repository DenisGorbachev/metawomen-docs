import { Arguments, Argv } from 'yargs'
import { getCommandName } from '../util/src/yargs.js'
import { together } from '../util/src/promise.js'
import { loadEnv } from '../util/src/env.js'
import { Path } from '../util/src/filesystem.js'
import { writeFile } from 'fs/promises'
import { flatten, range } from 'lodash-es'
import { getMinExperienceForUpgrade, getMinTokenAmountForUpgrade, getTokenAmountForFreezePerDayFloored, getTokenMinedAmountMax, getTokenMinedAmountMin } from '../formulas.js'
import { nail } from '../util/src/string.js'
import { markdownTable } from 'markdown-table'
import { fileURLToPath } from 'url'
import { Language, LanguageSchema, parseLanguage } from '../models/Language.js'
import { getFilename, getLang } from './utils.js'
import { ensure } from '../util/src/ensure.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = fileURLToPath(new URL('.', import.meta.url))

export const command = getCommandName(__filename)

export const describe = 'Write data sheets'

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
  await writeDataSheets($language, folder)
}

export async function writeDataSheets(language: Language, folder: Path) {
  return together([
    writeLevelProgression,
    writeReturnOnInvestment,
    writeSlashing,
  ], language, folder)
}

export async function writeLevelProgression(language: Language, folder: Path) {
  const baseFilename = 'LevelProgression'
  const keys: LevelStatKey[] = ['level', 'minExperience', 'minTokenAmount']
  const stats = getLevelStats()
  return writeDataSheet(language, folder, baseFilename, keys, stats)
}

export async function writeReturnOnInvestment(language: Language, folder: Path) {
  const baseFilename = 'ReturnOnInvestment'
  const keys: ROIStatKey[] = ['power', 'luck', 'tokenMinedAmountMin', 'tokenMinedAmountMax']
  const stats = getROIStats()
  return writeDataSheet(language, folder, baseFilename, keys, stats)
}

export async function writeSlashing(language: Language, folder: Path) {
  const baseFilename = 'Slashing'
  const keys: SlashingStatKey[] = ['frozenNFTCount', 'burnedTokenAmount']
  const stats = getSlashingStats()
  return writeDataSheet(language, folder, baseFilename, keys, stats)
}

export function getTable<Stat extends AbstractStat>(lang: Record<keyof Stat, string>, keys: Array<keyof Stat>, stats: Stat[]) {
  const header = keys.map(k => lang[k])
  const rows = stats.map(s => keys.map(k => s[k].toString()))
  const table = [header, ...rows]
  return markdownTable(table)
}

export async function writeDataSheet<Stat extends AbstractStat>(language: Language, folder: string, baseFilename: string, keys: Array<keyof Stat>, stats: Stat[]) {
  const lang = await getLang(language)
  const baseTablename = ensure(lang[baseFilename])
  const table = getTable(lang, keys, stats)
  const filename = getFilename(language, folder, baseFilename)
  const content = nail(`
  # ${baseTablename}
  
  ${table}
  `).trim() + '\n'
  console.info(filename)
  return writeFile(filename, content)
}

function getLevelStats(): LevelStat[] {
  const from = 1
  const to = 30
  return range(from, to + 1).map(level => {
    return {
      level,
      minExperience: getMinExperienceForUpgrade(level),
      minTokenAmount: getMinTokenAmountForUpgrade(level),
    }
  })
}

function getROIStats(): ROIStat[] {
  const powerFrom = 1
  const powerTo = 5
  const luckFrom = 1
  const luckTo = 5
  const result = range(powerFrom, powerTo + 1).map(power => {
    return range(luckFrom, luckTo + 1).map(luck => ({
      power,
      luck,
      tokenMinedAmountMin: getTokenMinedAmountMin(power, luck),
      tokenMinedAmountMax: getTokenMinedAmountMax(power, luck),
    }))
  })
  return flatten(result)
}

function getSlashingStats(): SlashingStat[] {
  const from = 10
  const to = 500
  return range(from, to + 1, 10).map(frozenNFTCount => {
    return {
      frozenNFTCount,
      burnedTokenAmount: frozenNFTCount * getTokenAmountForFreezePerDayFloored(1),
    }
  })
}

export type AbstractStat = Record<string, string | number>

interface LevelStat extends AbstractStat {
  level: number
  minExperience: number
  minTokenAmount: number
}

type LevelStatKey = keyof LevelStat

interface ROIStat extends AbstractStat {
  power: number
  luck: number
  tokenMinedAmountMin: number
  tokenMinedAmountMax: number
}

type ROIStatKey = keyof ROIStat

interface SlashingStat extends AbstractStat {
  frozenNFTCount: number
  burnedTokenAmount: number
}

type SlashingStatKey = keyof SlashingStat
