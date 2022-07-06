const Generator = require("yeoman-generator");
const BasicGenerator = require("../../BaseGenerator");

module.exports = class Generator extends BasicGenerator {
  prompting() {
    this.prompt([
      {
        type: "input",
        name: "name",
        message: "你的名字",
        default: "张三",
      },
      {
        type: "input",
        name: "age",
        message: "请输入你的年龄",
      },
    ]);
  }

  
  writings (){
    this.writing();
  }
  
};
