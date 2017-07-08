const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJSON = require('./package.json');
const path = require('path');
// OFFLINE_PLUGIN const OfflinePlugin = require('offline-plugin');

const VENDOR_LIBS = Object.keys(packageJSON.dependencies);

module.exports = {
  entry: {
    bundle: './src/index.jsx',
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      loaders: [
        'style-loader',
        'css-loader?sourceMap&modules&localIdentName=[name]__[local]__[hash:base64:5]',
        'sass-loader'
      ],
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      }, 'image-webpack-loader'],
    }],
  },
  plugins: [
    // Separate vendors from bundle
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),

    // OFFLINE_PLUGIN new OfflinePlugin(),

    // Include all scripts to html as diferent script tags.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
};
