
const path = require('path')

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer'),
]

module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  },
  devServer: {
    watchFiles: ["app/**/*.html", "app/assets/styles/**/*.css"],
    static: {
      directory: path.join(__dirname, "app")
    },
    hot: true,
    port: 3000,
    liveReload: false
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader', 
          {
            loader: 'postcss-loader', 
            options: {
              postcssOptions: {
                plugins: postCSSPlugins,
              },
            },
          },
        ],
      }
    ]
  }
}
