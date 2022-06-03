import { Arguments, Argv } from 'yargs'
import { getCommandName } from '../util/src/yargs.js'
import { together } from '../util/src/promise.js'
import { loadEnv } from '../util/src/env.js'
import { Path } from '../util/src/filesystem.js'
import { readFile, writeFile } from 'fs/promises'
import { impl } from '../util/src/todo.js'
import { range } from 'lodash'
import { getMinExperienceForUpgrade, getMinTokenAmountForUpgrade } from '../formulas.js'
import { nail } from '../util/src/string.js'
import { markdownTable } from 'markdown-table'

export const command = getCommandName(__filename)

export const describe = 'Generate tables'

export const builder = function (argv: Argv) {
  return argv
    .option('folder', {
      alias: 'f',
      string: true,
      requiresArg: true,
      description: 'A folder for tables',
    })
}

export interface Args extends Arguments {
  folder: Path
}

export const handler = async function (args: Args) {
  const { folder } = args
  const env = await loadEnv()
  return writeTables(folder)
}

export async function writeTables(folder: Path) {
  return together([
    writeLevelProgression,
    // writeReturnOnInvestment,
    // writeSlashing,
  ], folder)
}

function getFilename(folder: string, name: string) {
  return `${folder}/Tokenomics/Tables/${name}.generated.md`
}

async function getLanguage(name: string) {
  const raw = await readFile(`${__dirname}/../../i18n/common.${name}.json`)
  return JSON.parse(raw.toString())
}

export async function writeLevelProgression(folder: Path) {
  const baseFilename = 'LevelProgression'
  const baseTablename = 'Level progression'
  const stats = getLevelStats()
  const lang = await getLanguage('en')
  const filename = getFilename(folder, baseFilename)
  const keys: LevelStatKey[] = ['level', 'minExperience', 'minTokenAmount']
  const table = getTable(baseTablename, lang, keys, stats)
  return writeFile(filename, nail(`
  # ${baseTablename}
  
  ${table}
  `).trim())
}

function getTable<Stat extends AbstractStat>(name: string, lang: Record<keyof Stat, string>, keys: Array<keyof Stat>, stats: Stat[]) {
  const header = keys.map(k => lang[k])
  const rows = stats.map(s => keys.map(k => s[k].toString()))
  const table = [header, ...rows]
  return markdownTable(table)
}

function writeReturnOnInvestment(folder: Path) {
  throw impl()
}

function writeSlashing(folder: Path) {
  throw impl()
}

function getLevelStats(): LevelStat[] {
  const from = 1
  const to = 30
  return range(from, to).map(level => {
    return {
      level,
      minExperience: getMinExperienceForUpgrade(level),
      minTokenAmount: getMinTokenAmountForUpgrade(level),
    }
  })
}

type AbstractStat = Record<string, string | number>

interface LevelStat extends AbstractStat {
  level: number
  minExperience: number
  minTokenAmount: number
}

type LevelStatKey = keyof LevelStat
