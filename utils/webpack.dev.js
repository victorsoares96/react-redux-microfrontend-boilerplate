const { merge } = require("webpack-merge");
const path = require("path");
const { TuneDtsPlugin } = require("@efox/emp-tune-dts-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3003,
  },
  plugins: [
    ...common.plugins,
    new TuneDtsPlugin({
      output: './src/@types/utils.d.ts',
      path: './src/@types',
      name: 'utils.d.ts',
      isDefault: true,
    }),
  ]
});
