'use strict'

const Line = require('../domain/line')

class LineConverter {
  /**
   * @param {string} from The indent unit of the original
   * @param {string} to The indent unit to replace with
   */
  constructor (from, to) {
    this.from = from
    this.to = to
  }

  /**
   * @param {string} line The line
   */
  convertLine (line) {
    return new Line(line, this.from).replacedWithIndentUnit(this.to)
  }
}

module.exports = LineConverter
