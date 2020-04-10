const path = require('path');
const dist = path.resolve(__dirname, './');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    ".": "./index.ts",
    "components/accordion": './components/accordion/index.ts',
    "components/app-bar": './components/app-bar/index.ts',
    "components/avatar": './components/avatar/index.ts',
    "components/badge": './components/badge/index.ts',
    "components/breadcrumbs": './components/breadcrumbs/index.ts',
    "components/button": './components/button/index.ts',
    "components/card": './components/card/index.ts',
    "components/checkbox": './components/checkbox/index.ts',
    "components/divider": './components/divider/index.ts',
    "components/drawer": './components/drawer/index.ts',
    "components/empty-state": './components/empty-state/index.ts',
    "components/grid": './components/grid/index.ts',
    "components/icon": './components/icon/index.ts',
    "components/input": './components/input/index.ts',
    "components/menu-item": './components/menu-item/index.ts',
    "components/modal": './components/modal/index.ts',
    "components/nav-bar": './components/nav-bar/index.ts',
    "components/notifications": './components/notifications/index.ts',
    "components/page": './components/page/index.ts',
    "components/pane": './components/pane/index.ts',
    "components/popover": './components/popover/index.ts',
    "components/progress-bar": './components/progress-bar/index.ts',
    "components/radio-button": './components/radio-button/index.ts',
    "components/spinner": './components/spinner/index.ts',
    "components/stepper": './components/stepper/index.ts',
    "components/switch": './components/switch/index.ts',
    "components/table": './components/table/index.ts',
    "components/tabs": './components/tabs/index.ts',
    "components/tag": './components/tag/index.ts',
    "components/text": './components/text/index.ts',
    "components/text": './components/text/index.ts',
    "components/toggle": './components/toggle/index.ts',
    "components/tool": './components/tool/index.ts',
    "components/tooltip": './components/tooltip/index.ts',
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
        extractComments: false
      }),
    ],
  },
  output: {
    filename: "[name]/index.js",
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
