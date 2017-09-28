// var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');//NODE 自带的path包，用来配置路径

module.exports = {
  context: __dirname + '/src',
  // devtool: debug ? "inline-sourcemap" : null,
    //后期已经将入口文件由index更改为了root
  entry: "./js/root.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
        //下面是自行添加的 css 的 loader，就是css模块化开发 也即是 css 谁引用了这个csss谁才会引用里边的样式
    // {
    //     test: /\.css$/,
    //     loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
    // }
        //下面是使用ant-design的配置文件
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
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
  * 这个是控制自动编译 与运行webpack 时候加上 --watch  是一样的效果*/
    watch: true

};
