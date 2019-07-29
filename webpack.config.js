const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/styles.css",
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: "css-loader", options: { importLoaders: 1 } },
            "postcss-loader"
          ]
        })
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css", {
      disable: process.env.NODE_ENV === "development"
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html"
    }),
    new HtmlWebpackPlugin({
      filename: "howdy.html",
      template: "src/howdy.html"
    })
  ]
};
