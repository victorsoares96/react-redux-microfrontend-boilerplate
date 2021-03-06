const { merge } = require("webpack-merge");
const path = require("path");
const { TuneDtsPlugin } = require("@efox/emp-tune-dts-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3002,
  },
  plugins: [
    ...common.plugins,
    new ModuleFederationPlugin({
      name: "users",
      filename: "remoteEntry.js",
      remotes: {
        utils: 'utils@http://localhost:3003/remoteEntry.js',
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
    new TuneDtsPlugin({
      output: './src/@types/users.d.ts',
      path: './src/@types',
      name: 'users.d.ts',
      isDefault: true,
    }),
  ]
});
