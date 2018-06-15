var webpack = require('webpack');
var path = require('path');
var outputFile =  'language-tags.js';

var config = {
  entry: __dirname + '/lib/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: outputFile,
    library: 'languageTags',
  },
};

module.exports = config;
