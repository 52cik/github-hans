const path = require('path');
const webpack = require('webpack');

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
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')],
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      sourceMap: false,
    }),
  ],
};
