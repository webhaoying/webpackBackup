// var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');//NODE 自带的path包，用来配置路径

module.exports = {
  context: __dirname + '/src',
  // devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/index.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },

    output: {
    path: __dirname ,
    filename: "./src/bundle.js"
  },
  /*   这里的output如果不是
  * output: {
   path: __dirname + '/src/',
   filename: "bundle.js"
   },

   *
  * */
    watch: true

};
