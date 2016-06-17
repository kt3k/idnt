'use strict'

const LineConverter = require('./line-converter')

const fs = require('fs')

/**
 * @param {CliOptions} opts The parsed options
 */
function convert (opts) {
  if (opts.files.length === 0) {
    console.log('Error: file is not specified')

    return 1
  }

  const from = createIndentUnit(opts.from)

  if (from == null) {
    console.log('Error: input indent (-i option) is not specified')

    return 1
  }

  let to = createIndentUnit(opts.to)

  if (to == null) {
    to = '  ' // Default is 2 space indent
  }

  opts.files.forEach(file => {
    convertFile(file, from, to)
  })

  return 0
}

function createIndentUnit(o) {
  if (o == null) {
    return null
  }

  const size = +o

  if (0 < size && size < 1000) {
    return ' '.repeat(size)
  }

  if (o === 't') {
    return '\t'
  }

  throw new Error(`Error: indent option is invalid: ${o}`)
}

/**
 * @param {string} file The file path
 * @param {string} from The indent unit of the original
 * @param {string} to The indent unit to replace with
 */
function convertFile(file, from, to) {
  console.log(`Converting ${file}: indent "${from}" to "${to}"`)

  const contents = fs.readFileSync(file).toString()

  const lines = contents.split('\n')

  const lineConverter = new LineConverter(from, to)

  const convertedContents = lines.map(line => lineConverter.convertLine(line)).join('\n')

  fs.writeFileSync(file, convertedContents)
}

module.exports = convert
