const {prompt} = require('inquirer')
const fs = require('fs');
const path = require('path');

const run = () => {
  prompt([{
    type:'list',
    message:'选择你要使用的模块',
    name:"type",
    choices:[
      "a",
      "b",
      "c"
    ]
  }]).then(answer=>{
    console.log(answer);
  })
} 


module.exports =run;
