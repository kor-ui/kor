const path = require('path');
const dist = path.resolve(__dirname, './');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  output: {
    filename: "wa.js",
    path: dist
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: dist,
    compress: false,
    port: 8082,
    host : '0.0.0.0'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      inject: false
    }),
    new CopyPlugin([
      { from: path.resolve(__dirname, 'src/wa-styles.css'), to: dist },
      { from: path.resolve(__dirname, 'src/fonts/'), to: 'fonts/[path][name].[ext]' }
    ]),
  ]
};
