# idnt v1.0.4

[![CircleCI](https://circleci.com/gh/kt3k/idnt.svg?style=svg)](https://circleci.com/gh/kt3k/idnt)
[![codecov](https://codecov.io/gh/kt3k/idnt/branch/master/graph/badge.svg)](https://codecov.io/gh/kt3k/idnt)
[![bitHound Overall Score](https://www.bithound.io/github/kt3k/idnt/badges/score.svg)](https://www.bithound.io/github/kt3k/idnt)

> Change indent level

# Install

    npm install -g idnt

This installs `idnt` command.

# Command

    Usage: idnt -i [input indent size] -o [output indent size] files

      Options:
      -i, --input      The indent size of the input. Required.
      -o, --output     The indent size of the output. Default is 2.

    Example:

      idnt -i 4 src/index.js         # replace 4 width indent with 2 space indent
      idnt -i t -o 4 test/index.js   # replace tab indent with 4 space indent
      idnt -i 2 -o t src/index.js    # replace 2 space indent with tab indent

The command replaces the contents of the given file. I recommend you should clear all the local changes before running this command.

# Note

There are lots of command line tools out there which "fix" indent of your source code. However most of them do extra things at the same time and you cannot use them if you want to change only indent. What I wanted is the tool which only converts indent according to the current indent and doesn't touch anything else. That's why I created this.

# License

MIT
