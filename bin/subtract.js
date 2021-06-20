#!/usr/bin/env node

const subtraction = require('../operations/subtraction')
console.log(subtraction(Number(process.argv[2]), Number(process.argv[3])))