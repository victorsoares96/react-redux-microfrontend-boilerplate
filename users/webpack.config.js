const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { TuneDtsPlugin } = require("@efox/emp-tune-dts-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index",
  cache: false,
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
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(s(a|c)ss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
        use: {
          loader: "url-loader",
        },
      },
      {
        test: /bootstrap\.tsx$/,
        loader: require.resolve("bundle-loader"),
        options: {
          lazy: true,
        },
      },
      {
        test: /\.tsx?$/,
        loader: require.resolve("babel-loader"),
        exclude: /node_modules/,
        options: {
          presets: [
            require.resolve("@babel/preset-react"),
            require.resolve("@babel/preset-typescript"),
          ],
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
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
        },
        "react-dom": {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new TuneDtsPlugin({
      output: './src/@types/users.d.ts',
      path: './src/@types',
      name: 'users.d.ts',
      isDefault: true,
    }),
  ],
};

function getRemoteUrl(scope, port) {
  if (process.env.NODE_ENV === 'production') {
    return `${scope}@https://victorsoares-app-${scope}/remoteEntry.js`;
  }
  return `${scope}@http://localhost:${port}/remoteEntry.js`;
}