import path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  mode: 'development',
  entry: './src',

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@types': path.resolve(__dirname, 'src/types'),
      '@atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@pages': path.resolve(__dirname, 'src/components/pages'),
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
  ],

  devServer: {
    proxy: {
      '/api': 'http://localhost:8081',
    },
  },
};

export default config;
