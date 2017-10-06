const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  devtool: 'cheap-module-source-map',

  entry: [
    './main.js'
  ],

  context: resolve(__dirname, 'src'),

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'build'),
    publicPath: '',
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  }
};

module.exports = config;
