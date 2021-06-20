#!/usr/bin/env node
const multiplication = require('../operations/multiplication');
console.log(multiplication(Number(process.argv[2]), Number(process.argv[3])));