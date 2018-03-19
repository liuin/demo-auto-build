// webpack中内置的js压缩插件，存放在webpack的optimize对象下
// 引入webpack模块
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var packCSS = new ExtractTextPlugin('css.css');
var autoprefixer = require('autoprefixer');
// 缓存插件名称，以便简化后面的配置
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  entry: './js/js.js',
  // 发布文件
  output: {
    filename: 'js/bundle.js'
  },
  // module: {
  //   loaders: [{
  //     test: /\.css$/,
  //     loader: Ex.extract('style-loader', 'css-loader!postcss-loader') /*这里的写法注意下 */
  //   }]
  // }
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style-loader!css-loader!postcss-loader" /*这里的写法注意下 */
    }]
  },
  plugins: [
    new ExtractTextPlugin('css.css')
  ]
  // postcss: function () {
  //   // return [autoprefixer, cssnext, precss, cssnano]
  //   return [autoprefixer]
  // },
  // plugins: [
  //   new Ex("css.css")
  // ]
  // 我们要压缩所有的js文件，所以引入js压缩插件
  // plugins: [
  //   // 每个成员代表一个插件
  //   // new UglifyJsPlugin
  // ],

}