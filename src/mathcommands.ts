#!/usr/bin/env node
import { Command } from "commander"
import { name } from "../package.json"

const program = new Command()
program
    .option("-a --add <number>", "Adds numbers")
    .option("-m --multiply <numbers>", "Multiplys numbers")
    .option("-h --help", "Gets help")
    .option("-d --debug", "Enables debugging", false)

program.parse(process.argv)
program.name()
program.showSuggestionAfterError()
program.showHelpAfterError()

const args = program.opts()
var debug = args["debug"]

if(debug) {
    console.log(program.opts())
    console.log(name)
}

if(args["help"]) {
    program.outputHelp()
}

if(args["add"]) {
    const nums:Array<String> = args["add"].split(" ")
    var result = 0;

    nums.forEach((num) => {
        result += Number(num)
    })

    console.log(Number(result))
}