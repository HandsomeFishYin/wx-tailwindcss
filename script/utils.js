const getParam = (param) => {
  const args = process.argv;
  const argsStr = args.join(":");

  const reg = new RegExp(`(?:-{1,2})${param}:([^-]*)`);

  return argsStr.match(reg)?.[1] ?? null;
};

const getParams = () => {
  const args = process.argv;
  const argsStr = args.join(":");

  return argsStr.replace(/((-|--)[a-z]+):([^-]*)/g, function ($1, $2, $3, $4) {
    return $2 + " " + $4 + " ";
  });
};

module.exports = {
  getParam,
  getParams,
};
