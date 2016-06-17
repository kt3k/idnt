'use strict'

class Line {
  /**
   * @param {string} text The text of the line
   */
  constructor (text, indentUnit) {
    this.text = text
    this.re = new RegExp('^(' + indentUnit + ')*')
  }

  /**
   * Returns the line without indent.
   * @return {string}
   */
  nonIndent () {
    return this.text.replace(this.re, '')
  }

  /**
   * Returns the size of the space indent.
   * @return {number}
   */
  indentLevel () {
    return this.text.match(this.re)[0].length
  }

  /**
   * Returns the line replaced the indent unit by the given indent unit.
   * @param {string} unit The indent unit
   * @return {string}
   */
  replacedWithIndentUnit (unit) {
    return unit.repeat(this.indentLevel()) + this.nonIndent()
  }
}

module.exports = Line
