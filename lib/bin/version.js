const pkg = require('../../package')

module.exports = () => {
  console.log(`${pkg.name} v${pkg.version}`)

  return 0
}
