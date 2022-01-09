const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  // devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3001,
  },
  output: {
    publicPath: 'auto',
  },
  /*output: {
    publicPath: "http://localhost:3001/",
  },*/
  plugins: [
    ...common.plugins,
    new HtmlWebpackPlugin({
      template: './public/index.html',
      // url: 'http://localhost:3002/remoteEntry.js',
    }),
  ],
});
