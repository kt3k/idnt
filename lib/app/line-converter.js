'use strict'

const Line = require('../domain/line')

class LineConverter {
  constructor (from, to) {
    this.from = from
    this.to = to
  }

  /**
   * @param {string} line The line
   */
  convertLine (line) {
    return new Line(line).replacedWithIndentUnit(unit)
  }
}

module.exports = LineConverter
