const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { TuneDtsPlugin } = require("@efox/emp-tune-dts-plugin");
const path = require("path");

const deps = require("./package.json").dependencies;
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3001,
  },
  plugins: [
    ...common.plugins,
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        users: 'users@http://localhost:3002/remoteEntry.js',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps["react"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new TuneDtsPlugin({
      output: "./src/@types/container.d.ts",
      path: "./src/@types",
      name: "container.d.ts",
      isDefault: true,
    }),
  ]
});
