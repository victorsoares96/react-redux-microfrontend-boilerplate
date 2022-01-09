const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const common, { moduleFederationPluginOptions } = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimize: true,
  },
  plugins: [
    ...common.plugins,
    new ModuleFederationPlugin({
      name: "users",
      filename: "remoteEntry.js",
      library: { type: "var", name: "users" },
      exposes: {
        "./App": "./src/App",
        "./test": "./src/utils/test",
        "./redux/users/users.slice": "./src/redux/users/users.slice",
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
  ]
});
