var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, './index.js');
var BUILD_PATH = path.resolve(__dirname, './build');

module.exports = {
  entry: [
    APP_PATH
    ],
  output: {
    path: __dirname+'/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader?presets[]=es2015']
    }]
  }
}
