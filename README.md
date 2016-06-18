# idnt v1.0.0

> Change indent level

# Install

    npm install idnt

This installs `indent` command.

# Command

    Usage: idnt -i [input indent size] -o [output indent size] files

      Options:
      -i, --input      The indent size of the input. Required.
      -o, --output     The indent size of the output. Default is 2.

    Example:

      idnt -i 4 src/index.js         # replace 4 width indent with 2 space indent
      idnt -i t -o 4 test/index.js   # replace tab indent with 4 space indent
      idnt -i 2 -o t src/index.js    # replace 2 space indent with tab indent
