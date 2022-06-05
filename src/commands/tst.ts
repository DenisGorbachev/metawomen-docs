import { getCommandName } from '../util/src/yargs.js'
import { Argv } from 'yargs'
import { fileURLToPath } from 'url'

export const command = getCommandName(fileURLToPath(import.meta.url))

export const describe = 'Test ESM modules'

export const builder = function (argv: Argv) {
  return argv
}

export const handler = async function (args: unknown) {
  const result = ''
  console.info(result)
}
