const { join } = require('path');

const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const root = join(__dirname, '../');
const src = join(root, 'src');

module.exports = {
  entry: ['@babel/polyfill', join(src, 'index.tsx')],

  module: {
    rules: [
      {
        test: /\.ejs$/,
        loader: 'compile-ejs-loader',
        options: {
          htmlmin: true,
          htmlminOptions: {
            removeComments: true,
          },
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name].[contenthash:10].[ext]',
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[ext]',
        },
      },
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  performance: {
    hints: false,
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@src': src,
      '@components': join(src, 'components'),
      '@modules': join(src, 'modules'),
      '@utils': join(src, 'utils'),
      '@assets': join(src, 'assets'),
      '@screens': join(src, 'screens'),
    },
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new Dotenv({
      systemvars: true,
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
  ],
};
