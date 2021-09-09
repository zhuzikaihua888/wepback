
const path = require('path');
module.exports = {
    //用来切换模式的development开发模式 production用户模式
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    //http缓存 缓存跟这名字走 首页不能做缓存
    filename: '[name].[contenthash].js',
  },
    
  };