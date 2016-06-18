'use strict'

const fileContents = require('./file-contents')

const fs = require('fs')

/**
 * Copies the file.
 * @param {string} from The copy source path
 * @param {string} to The copy destination path
 */
module.exports = (from, to) => fs.writeFileSync(to, fileContents(from))
