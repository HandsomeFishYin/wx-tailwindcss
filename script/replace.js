const fs = require("fs");
const { getParam } = require("./utils");

const replaceTag = "view,text,canvas,swiper";

const filename = getParam("f") || getParam("file");

const twFile = fs.readFileSync(filename, "utf-8");

fs.writeFile(filename, twFile.replace(/\*/g, replaceTag), (err, data) => {
  if (!err) {
    console.log("文件生成成功");
  }
});
