const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
const common = require("./webpack.common.js");

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
      remotes: {
        utils: 'utils@https://victorsoares-app-utils.netlify.app/remoteEntry.js',
      },
      exposes: {
        "./components/UsersGrid/UsersGrid": "./src/components/UsersGrid/UsersGrid",
        "./redux/store": "./src/redux/store",
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
