const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const { ENV, BASE_URL, DEV_PORT, API_PORT } = require('./constants');

module.exports = {
  mode: ENV,
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?${BASE_URL}${DEV_PORT}`,
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
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@fortawesome/fontawesome-free-solid$': '@fortawesome/fontawesome-free-solid/shakable.es.js'
    }
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
  },
  module: {
    rules: [
      {
        test: /\.svg/,
        exclude: /node_modules/,
        use: {
          loader: 'svg-url-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2|jpg|png)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      },
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
        proxy: `${BASE_URL}${DEV_PORT}`
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
    }),
    new webpack.DefinePlugin({
      BASE_API_URL: JSON.stringify(`${BASE_URL}${API_PORT}`)
    })
  ]
};
