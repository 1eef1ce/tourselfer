const path = require('path');
var fs = require("fs");
const findUp = require('find-up');

module.exports = ({ config, mode }) => {
  const tsFile = findUp.sync('tsconfig.json');
  const tsConfig = JSON.parse(fs.readFileSync(tsFile));
  const root = path.join(path.dirname(tsFile), tsConfig.compilerOptions.baseUrl);
  if (!config.resolve.alias) {
    config.resolve.alias = {};
  }
  for (const prop in tsConfig.compilerOptions.paths) {
    const val = tsConfig.compilerOptions.paths[prop][0];
    const alias = prop.substring(0, prop.length - 2);
    const resolvePath = val.substring(0, val.length - 2);
    config.resolve.alias[alias] = path.join(root, resolvePath);
  }
  return config;
}


