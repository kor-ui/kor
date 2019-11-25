const path = require("path");
const dist = path.resolve(__dirname, "dist");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  watch: true,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig.json"
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "wa.js",
    path: dist
  },
  devServer: {
    contentBase: dist,
    compress: true,
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "wa",
      filename: "index.html",
      template: "src/index.html",
      alwaysWriteToDisk: false,
      minify: true
    }),
    new CopyPlugin([
      { from: path.resolve(__dirname, 'package.json'), to: dist },
      { from: path.resolve(__dirname, 'src/wa-styles.css'), to: dist },
      { from: path.resolve(__dirname, 'src/fonts/'), to: 'fonts/[path][name].[ext]' }
    ]),
  ]
};
