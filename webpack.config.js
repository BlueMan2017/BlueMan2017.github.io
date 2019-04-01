const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const postcss = require("postcss");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/dist/`,
    filename: "out.js"
  },
  plugins: [new HtmlWebpackPlugin()],
  watch: true,
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"]
          }
        }
      }
    ]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
  // postcss([postcssPresetEnv(/* pluginOptions */)]).process(YOUR_CSS /*, processOptions */);
};
