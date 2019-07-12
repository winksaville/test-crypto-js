var path = require('path');
var prjPath = path.resolve();
var srcPath = path.resolve("src");
var libPath = path.resolve("lib");
var distPath = path.resolve("dist");
var pubPath = "/";
var modulePath = "node_modules";

module.exports = {
  entry: path.join(srcPath, "entry.js"),
  mode: 'development',
  output: {
    path: distPath,
    publicPath: pubPath,
    filename: "bundle.js"
  },
  resolve: {
    modules: [
      srcPath, libPath, modulePath
    ],
    extensions: [
      ".js", ".json"
    ]
  },
};
