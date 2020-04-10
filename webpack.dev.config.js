const path = require('path');
const dist = path.resolve(__dirname, './');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    "kor": "./components/kor/index.ts",
    "accordion": './components/accordion/index.ts',
    "app-bar": './components/app-bar/index.ts',
    "avatar": './components/avatar/index.ts',
    "badge": './components/badge/index.ts',
    "breadcrumbs": './components/breadcrumbs/index.ts',
    "button": './components/button/index.ts',
    "card": './components/card/index.ts',
  },
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js$/,
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true,
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  output: {
    filename: "components/[name]/index.js",
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
