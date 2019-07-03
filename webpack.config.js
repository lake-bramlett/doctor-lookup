const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

      module.exports = {
        entry: './src/main.js',
        output: {
          filename: 'bundle.js',
          path: path.resolve(__dirname, 'dist')
      },

      // added this to try and fix the consoles from appearing always at line 1
      devtool: 'eval-source-map',


      plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
          title: 'twonumbers',
          template: './src/index.html',
          inject: 'body'
        })
      ],





      module: {
       rules: [
         {
           test: /\.css$/,
           use: [
             'style-loader',
             'css-loader'
           ]
         },
         {

         },

       ]
     }
   };
