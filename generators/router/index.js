const { BaseGenerator } = require('../../run.js');


module.exports = class Generator extends BaseGenerator {
  async prompting() {
    const answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: ""
      },
    ]);

    this.log("app name", answers.name);

  }
}

