#!/usr/bin/env node
const addition = require('../addition')
console.log(addition(Number(process.argv[2]), Number(process.argv[3])))