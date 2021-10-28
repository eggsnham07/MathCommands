#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const package_json_1 = require("./package.json");
const program = new commander_1.Command();
program
    .option("-a --add <number>", "Adds numbers")
    .option("-m --multiply <numbers>", "Multiplys numbers")
    .option("-h --help", "Gets help")
    .option("-d --debug", "Enables debugging", false)
    .option("-v --version", "Shows current version");
program.parse(process.argv);
program.name(String(package_json_1.name).split("/")[2]);
program.showSuggestionAfterError();
program.showHelpAfterError();
const args = program.opts();
var debug = args["debug"];
if (args["version"])
    console.log(`V${package_json_1.version}`);
if (args["help"]) {
    program.outputHelp();
}
if (args["add"]) {
    const nums = args["add"].split(" ");
    var result = 0;
    nums.forEach((num) => {
        result += Number(num);
    });
    console.log(Number(result));
}
if (debug) {
    console.log("Debug section:\n\n", program.opts());
}
