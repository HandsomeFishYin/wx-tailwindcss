const { execSync } = require("child_process");
const { getParam } = require("./utils");

const mode = getParam("m") || getParam("mode");

switch (mode) {
  case "dev":
  case "development": {
    const filename = "tw.wxss";
    execSync(
      `npx tailwindcss -i srcStyles/common.css -p  -o styles/${filename}  && node script/replace -f styles/${filename}`,
      {
        stdio: "inherit",
      }
    );
    break;
  }
  case "qa":
  case "pre":
  case "prod": {
    const filename = "tw.min.wxss";
    execSync(
      `NODE_ENV=production npx tailwindcss -i srcStyles/common.css -p -o styles/${filename} --minify && node script/replace -f styles/${filename} `,
      {
        stdio: "inherit",
      }
    );
    break;
  }
  default: {
    const filename = "tw.purge.wxss";
    execSync(
      `NODE_ENV=production npx tailwindcss -i srcStyles/common.css --postcss  -o styles/${filename} && node script/replace -f styles/${filename}`,
      {
        stdio: "inherit",
      }
    );
  }
}
