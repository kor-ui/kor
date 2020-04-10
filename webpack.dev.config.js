const path = require('path');
const dist = path.resolve(__dirname, './');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: "./index.ts",
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js$/,
        terserOptions: {
          // mangle: true, // Note `mangle.properties` is `false` by default.
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
    ],
  },
  output: {
    filename: "kor.js",
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
    host: '0.0.0.0'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      inject: false
    }),
  ]
};
