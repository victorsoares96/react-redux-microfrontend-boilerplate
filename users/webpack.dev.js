const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3002,
  },
  output: {
    publicPath: 'auto',
  },
  //devtool: "source-map",
  /*optimization: {
    minimize: false,
  },*/
  /*devServer: {
    static: "./dist",
    port: 3002
  },*/
  /*output: {
    publicPath: "http://localhost:3002/",
  },*/
});
