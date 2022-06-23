const Generator = require('yeoman-generator');

//设置BaseGenerator 类，作为sub-generator的父项
BaseGenerator = class BaseGenerator extends Generator {
  constructor(args, opts) {    
    super(args, opts);

  }

  writeTem(){
    console.log('writeTem');
  }
};