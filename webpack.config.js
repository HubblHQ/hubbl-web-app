var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    app: './src/javascript/app.jsx',
    styles: './src/stylesheet/main.scss'
  },
  output: {
        filename: '[name].js',
        path: './assets'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,

        loader: 'babel-loader',
        query: {
          "plugins": ["transform-react-jsx"],
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader",
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    /*new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new webpack.optimize.UglifyJsPlugin({ comments: false }),
      function() {
      this.plugin("done", function(stats) {
        require("fs").writeFileSync(
          "./stats.json",
          JSON.stringify(stats.toJson()));
      });
  }*/
  ]
}
