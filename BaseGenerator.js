//example.js
const Generator = require('yeoman-generator');

//设置BaseGenerator 类，作为sub-generator的父项
class BaseGenerator extends Generator {
  constructor(opts) {    
    super(opts);
  }

  initializing(){
    console.log('initializing')
  }          
  writing(){
    console.log('writing');
  }

};

module.exports = BaseGenerator;
