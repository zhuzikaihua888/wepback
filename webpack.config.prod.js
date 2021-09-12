const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  //用来切换模式的development开发模式 production用户模式
  mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
    
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    //http缓存 缓存跟这名字走 首页不能做缓存
    filename: '[name].[contenthash].js',
  },
  plugins: [new HtmlWebpackPlugin(
    {
      title: '闰闰',
      template: 'src/assets/index.html'
    }),
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css",
    chunkFilename: "[id].[contenthash].css",
    ignoreOrder: false,
  }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
        ],
       
      },
    ],
  },
};





