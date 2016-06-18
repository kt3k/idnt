'use strict'

class CliOptions {
  /**
   * @param {object} argv The minimist parsed cli options
   */
  constructor (argv) {
    this.help = argv.h != null || argv.help != null
    this.version = argv.v != null || argv.version != null
    this.files = argv._
    this.from = argv.input || argv.i
    this.to = argv.output || argv.o
  }
}

/**
 * The entrypoint.
 * @param {object} argv The minimist parsed cli options
 */
function main (argv) {
  const opts = new CliOptions(argv)

  if (opts.version) {
    return require('./version')()
  }

  if (opts.help) {
    return require('./help')()
  }

  return require('../convert')(opts)
}

module.exports = main
