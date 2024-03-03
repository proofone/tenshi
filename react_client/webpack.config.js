const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const staticPubPath = '/'

module.exports = {
  mode: 'development',

  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: '../public',
      publicPath: staticPubPath,
    },
    port: 3002,
    historyApiFallback: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },

  entry: {
    'main': './react_client/src/App.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './react_client/src/base.html',
      publicPath: staticPubPath,

    }),
    new MiniCssExtractPlugin(),
  ],
  output: { 
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../public'),
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },      
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ['@babel/preset-env', {"targets": "defaults"}],
              ['@babel/preset-react', {"runtime": "automatic"}]  // runtime: automatic attribute required for React to work
            ]          
	        },
      	},
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};
