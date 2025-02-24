const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.web.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules\/(?!(react-native-video|react-native-web)\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-private-methods',
              '@babel/plugin-proposal-private-property-in-object'
            ]
          }
        }
      },
      {
        test: /\.(mp4|webm)$/,
        use: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.web.js', '.web.tsx', '.tsx', '.ts', '.js'],
    alias: {
      'react-native$': 'react-native-web'
    },
    fallback: {
      'react-native-video': false,
      module: false,
      process: false
    },
    preferRelative: true,
    mainFields: ['browser', 'module', 'main']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.ProvidePlugin({
      process: 'process'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env': JSON.stringify(process.env)
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProgressPlugin()
  ],
  cache: {
    type: 'filesystem'
  },
  target: ['web', 'es5'],
  optimization: {
    moduleIds: 'named',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 'auto', // This will automatically find an available port
    hot: true,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    }
  },
  stats: {
    errorDetails: true
  }
};
