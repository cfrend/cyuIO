var path = require('path');
var bootstrapEntryPoints = require('./webpack.bootstrap.config');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

/*const isProd = process.argv.indexOf('-p') !== -1;
var cssDev = ['style-loader', 'css-loader?sourceMap', 'sass-loader'];
var cssProd = ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: ['css-loader', 'sass-loader']
})
var cssConfig = isProd ? cssProd: cssDev;*/
//var bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;

var config = {
    entry: {
          entry: SRC_DIR + '/app/index.js',
          //bootstrap: bootstrapConfig
    },
    output: {
        path: DIST_DIR + '/app',
        filename: 'bundle.js',
        publicPath: '/app/',
      },
    module: {
         /* rules: [
                {
                      test: /\.scss$/,
                      use: ExtractTextPlugin.extract(['style-loader, css-loader', 'sass-loader'])
                },
                {
                      test: /\.(jpe?g|png|gif|svg)$/i,
                      use: [
                           'file-loader?name=images/[name].[ext]',
                           'image-webpack-loader'
                     ]
               },
               { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
               { test: /\.(ttf|eot)$/, loader: 'file-loader' }
         ],*/
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: 'babel-loader',
                query: {presets: ['react', 'es2015', 'stage-2'],
                  },
              }
        ],
      }
      /*devServer: {
            contentBase: DIST_DIR + '/app',
            compress: true,
            hot: true,
            open: true
      },
      plugins: [
            new HtmlWebpackPlugin({
                        title: 'CYUTIL',
                        hash: true,
                        template: './src/index.html'
            }),
            new ExtractTextPlugin({
                        filename: 'app.css',
                        disable: !isProd,
                        allChunks: true
            }),
            //new webpack.HotModuleReplacementPlugin(),
            //new webpack.NamedModulesPlugin()
      ],*/
  };

module.exports = config;
