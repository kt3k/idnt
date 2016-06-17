#!/usr/bin/env node

process.exit(require('../lib/bin/idnt')(require('minimist')(process.argv.slice(2))))
