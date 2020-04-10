const path = require('path');
const dist = path.resolve(__dirname, './');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    // main
    "kor": "./index.ts",
    "shared-styles": './components/shared-styles/index.ts',
    // components
    "accordion": './components/accordion/index.ts',
    "app-bar": './components/app-bar/index.ts',
    "avatar": './components/avatar/index.ts',
    "badge": './components/badge/index.ts',
    "breadcrumbs": './components/breadcrumbs/index.ts',
    "button": './components/button/index.ts',
    "card": './components/card/index.ts',
    "checkbox": './components/checkbox/index.ts',
    "divider": './components/divider/index.ts',
    "drawer": './components/drawer/index.ts',
    "empty-state": './components/empty-state/index.ts',
    "grid": './components/grid/index.ts',
    "icon": './components/icon/index.ts',
    "input": './components/input/index.ts',
    "menu-item": './components/menu-item/index.ts',
    "modal": './components/modal/index.ts',
    "nav-bar": './components/nav-bar/index.ts',
    "notifications": './components/notifications/index.ts',
    "page": './components/page/index.ts',
    "pane": './components/pane/index.ts',
    "popover": './components/popover/index.ts',
    "progress-bar": './components/progress-bar/index.ts',
    "radio-button": './components/radio-button/index.ts',
    "spinner": './components/spinner/index.ts',
    "stepper": './components/stepper/index.ts',
    "switch": './components/switch/index.ts',
    "table": './components/table/index.ts',
    "tabs": './components/tabs/index.ts',
    "tag": './components/tag/index.ts',
    "text": './components/text/index.ts',
    "text": './components/text/index.ts',
    "toggle": './components/toggle/index.ts',
    "tool": './components/tool/index.ts',
    "tooltip": './components/tooltip/index.ts',
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
