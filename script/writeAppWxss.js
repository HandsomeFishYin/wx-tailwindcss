const fs = require("fs");
const { getParam } = require("./utils");


const filename = getParam("f") || getParam("file");

fs.writeFile('app.wxss',`@import './styles/${filename}';`,function(err,data){
  if(!err){
    console.log('app.wxss 已更新')
  }else{
    console.log('error = ',err)
  }
})
