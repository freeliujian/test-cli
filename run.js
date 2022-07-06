const { prompt } = require("inquirer");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const yeoman = require("yeoman-environment");

const cliPath = path.resolve(__dirname, ".");
const tem = fs
  .readdirSync(`${cliPath}/generators`)
  .filter((f) => !f.startsWith("."))
  .map((f) => {
    return {
      name: `${f.padEnd(15)} - ${chalk.gray(
        require(`${cliPath}/generators/${f}/explain.json`).desc
      )}`,
      value: f,
      short: f,
    };
  });

const runGenerator = async (
  generatorPath,
) => {
  return new Promise((resolve) => {
    const Generator = require(generatorPath);
    const env = yeoman.createEnv([], {
      cwd:process.cwd(),
    });

    const generator = new Generator({
      env,
      resolved: require.resolve(generatorPath),
    });

    return generator.run(() => {
      console.log("生成成功");
      resolve(true);
    });
  });
};

const run = async () => {
  const selectTem = await prompt([
    {
      name: "type",
      message: "选择你要使用的模块",
      type: "list",
      choices: tem,
    },
  ]);

  try {
    return runGenerator(`./generators/${selectTem.type}`);
  } catch (e) {
    console.error(chalk.red(`模板创建失败`), e);
    process.exit(1);
  }
};

module.exports = run;
