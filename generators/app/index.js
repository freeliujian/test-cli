const Generator = require('yeoman-generator')
const BasicGenerator = require('../../BaseGenerator')


module.exports = class Generator extends BasicGenerator {

  prompting(){
    
  }

  default(){
    console.log('defalut');
  }
}
