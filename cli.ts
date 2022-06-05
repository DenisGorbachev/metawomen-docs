#!/usr/bin/env ts-node

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import * as tst from './src/commands/tst.js'
import * as generateTables from './src/commands/writeTables.js'

Error.stackTraceLimit = Infinity

const parser = yargs(hideBin(process.argv))
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    default: false,
    description: 'Run with verbose logging',
  })
  .command(tst)
  .command(generateTables)
  .strict()
  .help()
  // .fail(false)

const main = async () => await parser.argv

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
