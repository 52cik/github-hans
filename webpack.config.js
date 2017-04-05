const path = require('path');
const webpack = require('webpack');

// 开发模式
const isDev = process.env.NODE_ENV === 'development';

// 插件
const plugins = [];

if (!isDev) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    sourceMap: false,
  }));
}

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  entry: {
    main: './src/main/index.js',
    locals: './src/locale/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: isDev ? '#cheap-module-eval-source-map' : false, // 开发模式
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')],
      },
    ],
  },
  plugins,
};
