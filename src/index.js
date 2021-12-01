"use strict";
const { program } = require("commander");

const challengeDictionary = {};

program
  .description("A collection of solutions for the adventofcode 2021 event")
  .requiredOption("-d, --day <number>", "Selects the daily challenge")
  .version("0.0.0");

program.parse();

const { day } = program.opts();

const solve = require(`./challenges/${day}`);

console.log(solve());
