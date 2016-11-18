var path = require('path');

module.exports = {
  entry: {
    main: '../src/main.js'
  },
  output: {
    filename: '[name].js',
    path: '../src/files'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            require.resolve('babel-preset-es2015'),
            require.resolve('babel-preset-react')
          ],
          plugins: [
            require.resolve('babel-plugin-transform-runtime'),
            require.resolve('babel-plugin-transform-es2015-modules-amd')
          ]
        }
      }
    ]
  }
}
