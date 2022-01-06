const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  output: {
    publicPath: "auto",
  },
  plugins: [
    ...common.plugins,
    new HtmlWebpackPlugin({
      template: './public/index.html',
      url: 'https://victorsoares-app2.netlify.app/remoteEntry.js',
    }),
  ],
});
