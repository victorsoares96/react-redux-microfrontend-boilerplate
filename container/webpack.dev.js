const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  devServer: {
    static: "./dist",
  },
  output: {
    publicPath: "http://localhost:3001/",
  },
  plugins: [
    ...common.plugins,
    new HtmlWebpackPlugin({
      template: './public/index.html',
      url: 'http://localhost:3002/remoteEntry.js',
    }),
  ],
});
