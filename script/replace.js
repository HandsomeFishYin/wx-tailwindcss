const fs = require("fs");
const { getParam } = require("./utils");

const replaceTag = "view,text,canvas,swiper";

const filename = getParam("f") || getParam("file");

const twFile = fs.readFileSync(filename, "utf-8");

fs.writeFile(filename, twFile.replace(/\*/g, replaceTag), (err, data) => {
  if (!err) {
    fs.writeFile("app.wxss", `@import '${filename}';`, function (err, data) {
      if (!err) {
        console.log("app.wxss 已更新");
        process.exit(0);
      } else {
        console.log("error = ", err);
      }
    });
  } else {
    console.log("error = ", err);
  }
});
