//example.js
const Generator = require('yeoman-generator');

//设置BaseGenerator 类，作为sub-generator的父项
class BaseGenerator extends Generator {
  constructor(opts) {    
    super(opts);
    this.type = opts.type;
    this.path = opts.resolved;
  }

  initializing(){
    console.log('initializing')
  }          
  writeFiles({context}){
    this.fs.copyTpl(
      this.templatePath('app.txt'),
      this.destinationPath('app.txt'),
      context
    )
  }
};

module.exports = BaseGenerator;
