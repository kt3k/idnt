const convert = require('../lib/convert')

const fileContents = require('./helper/file-contents')
const fileCopy = require('./helper/file-copy')

const test = require('tape')

test('It returns 1 if given files are empty', t => {
  t.equal(convert({files: []}), 1, 'The return code is 1')

  t.end()
})

test('It returns 1 if the from size is not given', t => {
  t.equal(convert({files: ['test/fixture/test0.js'], from: null}), 1, 'The return code is 1')

  t.end()
})

test('It converts the indent width of the file with given parameter', t => {
  fileCopy('test/fixture/test0.js', 'test/fixture/test0-copy.js')

  t.equal(convert({files: ['test/fixture/test0-copy.js'], from: 4, to: 8}), 0, 'The return code is 0')

  t.equal(fileContents('test/fixture/test0-copy.js'), fileContents('test/fixture/test0-conv0.js'))

  t.end()
})

test('It converts to 2 space if the `to` param is not give', t => {
  fileCopy('test/fixture/test0.js', 'test/fixture/test0-copy.js')

  t.equal(convert({files: ['test/fixture/test0-copy.js'], from: 4}), 0, 'The return code is 0')

  t.equal(fileContents('test/fixture/test0-copy.js'), fileContents('test/fixture/test0-conv1.js'))

  t.end()
})

test('It converts to tab indent if the `to` param is `t`', t => {
  fileCopy('test/fixture/test0.js', 'test/fixture/test0-copy.js')

  t.equal(convert({files: ['test/fixture/test0-copy.js'], from: 4, to: 't'}), 0, 'The return code is 0')

  t.equal(fileContents('test/fixture/test0-copy.js'), fileContents('test/fixture/test0-conv2.js'))

  t.end()
})

test('It throws when the indent param is invalid', t => {
  t.throws(() => convert({files: ['test/fixture/test-0.js'], from: 'x'}))

  t.end()
})
