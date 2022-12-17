const HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

module.exports = {
  entry: '/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack demo 2',
      template: 'src/assets/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.styl$/i,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
      { test: /\.less$/i, use: ['style-loader', 'css-loader', 'less-loader'] },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: { implementation: require('dart-sass') },
          },
        ],
      },
    ],
  },
}
