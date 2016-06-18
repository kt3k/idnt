const test = require('tape')
const idnt = require('../../lib/bin/idnt')

test('version', t => {
  idnt({version: true})

  t.end()
})

test('help', t => {
  idnt({help: true})

  t.end()
})

test('convert', t => {
  idnt({_: []})

  t.end()
})
