![CI](https://github.com/mchirico/refactor/workflows/CI/badge.svg)
[![Build Status](https://travis-ci.org/mchirico/refactor.svg?branch=master)](https://travis-ci.org/mchirico/refactor)

# refactor
martin


First start the server, so that all tests pass

```bash
node app/server.js
# or
npm restart
```

Next, run the tests:

```bash

npm test

> converter@1.0.0 test /Users/mchirico/refactor
> mocha --reporter spec



  Testing Billing
    Chapter 1 program
Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits

      ✓ calculates the bill

  Color Code Converter
    RGB to Hex conversion
      ✓ converts the basic colors
    Hex to RGB conversion
      ✓ converts the basic colors

  Color Code Converter API
    RGB to Hex conversion
      ✓ returns status 200
      ✓ returns the color in hex
    Hex to RGB conversion
      ✓ returns status 200
      ✓ returns the color in RGB


  7 passing (61ms)

```




<img src="https://user-images.githubusercontent.com/755710/53687915-2538f300-3d09-11e9-98e3-59dce588b500.png" alt="drawing" width="800"/>
