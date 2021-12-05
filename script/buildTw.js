const { execSync } = require("child_process");
const { getParam } = require("./utils");

const mode = getParam("m") || getParam("mode");

switch (mode) {
  case "dev":
  case "development": {
    execSync(
      "npx tailwindcss -i srcStyles/common.css -p  -o styles/tw.wxss  && node script/replace -f styles/tw.wxss",
      {
        stdio: "inherit",
      }
    );
    break;
  }
  case "qa":
  case "pre":
  case "prod": {
    execSync(
      "NODE_ENV=production npx tailwindcss -i srcStyles/common.css -p -o styles/tw.min.wxss --minify && node script/replace -f styles/tw.min.wxss",
      {
        stdio: "inherit",
      }
    );
    break;
  }
  default: {
    execSync(
      "NODE_ENV=production npx tailwindcss -i srcStyles/common.css --postcss  -o styles/tw.purge.wxss && node script/replace -f styles/tw.purge.wxss",
      {
        stdio: "inherit",
      }
    );
  }
}
