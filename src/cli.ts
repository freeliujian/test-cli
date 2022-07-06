#!/usr/bin/env node

import { satisfies } from 'semver';
const args = require('yargs-parser')(process.argv.slice(2));
import chalk from 'chalk';
import run from './run';


if (args.v || args.version) {
  console.log(require('./package').version);
  process.exit(0);
}

if (!satisfies(process.version, ">= 8.0.0")) {
  console.error(
    chalk.red("node 版本至少要大于8.0.0!")
  );
  process.exit(1);
}

const name = args._[0] || '';
const { type } = args;
delete args.type;

(async () => {
    await run({
        name,
        type,
        args,
    });
    process.exit(0);
})();

