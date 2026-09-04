const path = require('path');
const dist = path.resolve(__dirname, './');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: "./index.ts",
  mode: "production",
  externals: {
    lit: 'lit',
    'lit-element': 'lit-element',
    'lit-html': 'lit-html',
    '@lit/reactive-element': '@lit/reactive-element',
    '@lit-labs/ssr': '@lit-labs/ssr',
    '@lit-labs/ssr-client': '@lit-labs/ssr-client',
  },
  experiments: {
    outputModule: true,
  },
  externalsType: 'module',
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
    filename: "kor_ui-lit.js",
    path: dist,
    library: {
      type: 'module'
    }
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
};
