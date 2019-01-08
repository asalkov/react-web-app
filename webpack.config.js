const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
//  entry : "./src/webapp/js/index.jsx",
//  output: {
//      filename: "./src/webapp/prod/bundle.js"
//    },

    entry: path.join(__dirname,'src', "webapp", "js", 'index.jsx'),
      output: {
        path: path.join(__dirname,'src', "webapp", "prod"),
        filename: 'index.bundle.js'
      },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                  }
        }
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/webapp/html/index.html",
        filename: "index.html"
  })]

};