const webpack = require('webpack');
const htmlWebpack = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const { join } = require('path');

const htmlWebpackConfig = new htmlWebpack({
  template: './client/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const config = {
  devtool: 'source-map',
  entry: './client/src/Index.jsx',
  output: {
    path: join(__dirname, 'dist'),
    filename: 'js/bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['eslint-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss|css)$/,
        use: extractTextPlugin.extract({
          use: [
            'css-loader',
            'sass-loader'
          ],
          fallback: 'style-loader'
        }),
      },
    ]
  },
  plugins: [
    htmlWebpackConfig,
    new extractTextPlugin('css/bundle.css')
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  devServer: {
    historyApiFallback: true,
    publicPath: '/',
    proxy: {
      '/api/v1/**': {
        target: 'http://[::1]:3000',
        secure: false
      }
    }
  }
};

module.exports = config;