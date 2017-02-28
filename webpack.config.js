var webpack = require('webpack');
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackStrip = require('strip-loader');

var PROD = process.env.NODE_ENV == "production";

// Sourcemaps only loaded in 'development'

var cssLoaders = [
  'css?sourceMap=' + !PROD, 
  'postcss',
  '!sass?sourceMap='  + !PROD
];

var moduleLoaders = [
  {
    test: /\.tsx?$/,
    loaders: ['react-hot','ts-loader']
  },
  {
    test: /\.s?css?$/,
    loader: ExtractTextPlugin.extract('style-loader', cssLoaders)
  },
  {
    test: /\.(ttf|eot|svg|woff(2)?)\??\w*\#*\w*$/,
    loader: 'file-loader?name=assets/fonts/[hash].[ext]'
  },
  {
    test: /\.(jpeg|png)$/,
    loader: 'file-loader?name=assets/images/[name].[ext]'
  }
]

// Adds strip-loader in production

if (PROD) moduleLoaders.push({ 
  test: /\.tsx?$/, 
  loader: WebpackStrip.loader('console.log') 
});


module.exports = {
  entry: "./src/root.tsx",

  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, "public")
  },

  resolve: {
    extensions: ['', '.js', '.ts', '.jsx', '.tsx', '.css', '.scss']
  },

  devtool: PROD ? 'eval' : 'source-map',

  devServer: {
    contentBase: "dist",
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: 8080
  },

  module: {
    loaders: moduleLoaders,
    preLoaders: [
      { 
        test: /\.js$/, 
        loader: "source-map-loader" 
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new ExtractTextPlugin('styles.[contenthash].css', {
        allChunks: true
    }),

    new HtmlWebpackPlugin({
        title: 'My React App',
        template: 'public/index.html',
        inject: true
    }),

    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        VERSION: JSON.stringify(process.env.npm_package_version)
      }
    })
  ]
}