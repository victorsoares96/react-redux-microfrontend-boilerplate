const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  devServer: {
    static: "./dist",
    port: 3002
  },
  output: {
    publicPath: "http://localhost:3002/",
  },
});
