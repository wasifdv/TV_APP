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
              ['@babel/plugin-proposal-class-properties', { loose: false }],
              ['@babel/plugin-proposal-private-methods', { loose: false }],
              ['@babel/plugin-proposal-private-property-in-object', { loose: false }]
            ]
          }
        }
      },
      {
        test: /\.(mp4|webm)$/,
        use: 'file-loader'
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
    },
    preferRelative: true,
    mainFields: ['browser', 'module', 'main']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
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
    port: 8080,
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
