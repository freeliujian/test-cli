import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import chalk from "chalk";
import mkdirp from 'mkdirp';

const cliPath = path.resolve(__dirname, "..");

const generators = fs
  .readdirSync(`${cliPath}/app/generator`)
  .filter((f) => !f.startsWith("."))
  .map((f) => {
    return {
      name: `${f.padEnd(15)} - ${chalk.gray(
        require(`../app/generator/${f}/meta.json`).description
      )}`,
      value: f,
      short: f,
    };
  });
  

const run = async (_config: any) => {
  console.log(1)
};

export default run;
