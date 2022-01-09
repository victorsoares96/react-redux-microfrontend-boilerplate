const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index",
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: require.resolve("babel-loader"),
        exclude: /node_modules/,
        options: {
          presets: [
            require.resolve("@babel/preset-typescript"),
          ],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "utils",
      filename: "remoteEntry.js",
      library: { type: "var", name: "utils" },
      exposes: {
        "./sayHello": "./src/sayHello",
      },
      shared: {
        ...deps,
      },
    }),
  ]
};

