#!/usr/bin/env node

const semver = require("semver");
const args = require("yargs-parser")(process.argv.slice(2));
const chalk = require("chalk");
const run = require("./run.js");

if (args.v || args.version) {
  console.log(require("./package").version);
  process.exit(0);
}

if (!semver.satisfies(process.version, ">= 8.0.0")) {
  console.error(chalk.red("node 版本至少要大于8.0.0!"));
  process.exit(1);
}

(async () => {
  await run();
  process.exit(0);
})();
