const webpack = require('webpack');
require('dotenv').config();

const config = {
  entry: ['./client/index.js'],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        REACT_APP_GOOGLE_KEY: JSON.stringify(process.env.REACT_APP_GOOGLE_KEY),
      },
    }),
  ],
};

module.exports = config;
