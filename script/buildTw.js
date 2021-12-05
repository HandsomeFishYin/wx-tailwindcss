const { execSync } = require("child_process");
const { getParam } = require("./utils");

const mode = getParam("m") || getParam("mode");

const execScript = (filename, env, params = "") => {
  return execSync(
    `NODE_ENV=${env} npx tailwindcss -i srcStyles/common.css -p ${params}  -o ./styles/${filename}  && node script/replace -f ./styles/${filename}`,
    {
      stdio: "inherit",
    }
  );
};

switch (mode) {
  case "dev":
  case "development": {
    execScript("tw.wxss", "development");
    break;
  }
  case "qa":
  case "pre":
  case "prod":
  case "production": {
    execScript("tw.min.wxss", "production", "-m");
    break;
  }
  default: {
    execScript("tw.purge.wxss", "production");
  }
}
