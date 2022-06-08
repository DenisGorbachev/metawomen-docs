#!/usr/bin/env ts-node

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import * as writeDataSheets from './src/commands/writeDataSheets.js'
import * as writeCode from './src/commands/writeCode.js'

Error.stackTraceLimit = Infinity

const parser = yargs(hideBin(process.argv))
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    default: false,
    description: 'Run with verbose logging',
  })
  .command(writeDataSheets)
  .command(writeCode)
  .strict()
  .help()
  // .fail(false)

const main = async () => await parser.argv

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
