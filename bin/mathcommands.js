#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var package_json_1 = require("../package.json");
var program = new commander_1.Command();
program
    .option("-a --add <number>", "Adds numbers")
    .option("-m --multiply <numbers>", "Multiplys numbers")
    .option("-h --help", "Gets help")
    .option("-d --debug", "Enables debugging", false);
program.parse(process.argv);
program.name(package_json_1.name);
program.showSuggestionAfterError();
program.showHelpAfterError();
var args = program.opts();
var debug = args["debug"];
if (debug) {
    console.log(program.opts());
}
if (args["help"]) {
    program.outputHelp();
}
if (args["add"]) {
    var nums = args["add"].split(" ");
    var result = 0;
    nums.forEach(function (num) {
        result += Number(num);
    });
    console.log(Number(result));
}
