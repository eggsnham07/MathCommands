#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var program = new commander_1.Command();
program
    .option("-a --add <number>", "Adds numbers")
    .option("-m --multiply <numbers>", "Multiplys numbers")
    .option("-h --help <command>", "Gets help", "null")
    .option("-d --debug", "Enables debugging", false);
program.parse(process.argv);
var args = program.opts();
var debug = args["debug"];
if (debug) {
    console.log(program.opts());
}
if (args["help"]) {
    if (debug)
        console.log("Help requested", args["help"]);
    if (args["help"] == "null") {
        program.outputHelp();
    }
    else {
        program.help(args["help"]);
    }
}
if (args["add"]) {
    var nums = args["add"].split(" ");
    var result = 0;
    nums.forEach(function (num) {
        result += Number(num);
    });
    console.log(Number(result));
}
