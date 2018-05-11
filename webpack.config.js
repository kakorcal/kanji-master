const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const ENV = process.env.NODE_ENV;

module.exports = {
  mode: ENV,
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './client/js/App.jsx'
  ],
  devtool: 'eval-cheap-source-map',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  devServer: {
    hot: true,
    publicPath: '/',
    historyApiFallback: true
    // https: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /(node_modules\/normalize\.css|client\/css)/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              config: {
                path: path.join(__dirname, 'postcss.config.js')
              }
            }
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        // browse to http://localhost:3030/ during development
        host: 'localhost',
        port: 3030,
        // proxy the Webpack Dev Server endpoint
        // (which should be serving on http://localhost:8080/)
        // through BrowserSync
        proxy: 'http://localhost:8080/'
      },
      // plugin options
      {
        // prevent BrowserSync from reloading the page and let Webpack Dev Server take care of this
        reload: false
      }
    ),
    new HtmlWebpackPlugin({
      // name of the template that will be used by HtmlWebpackPlugin
      template: path.join(__dirname, 'client/template.html'),
      // name of the html that will be generated
      filename: 'index.html',
      // inject at the bottom of the body tag
      inject: 'body'
    })
  ]
};
