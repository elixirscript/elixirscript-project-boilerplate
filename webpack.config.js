const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  cache: true,
  entry: ["./app/javascript/index.js"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "build.min.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/html/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.ex$/,
        exclude: /(node_modules|bower_components)/,
        loader: "elixirscript-loader",
        options: {
          inputFolder: "./app/elixirscript"
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080
  }
};
