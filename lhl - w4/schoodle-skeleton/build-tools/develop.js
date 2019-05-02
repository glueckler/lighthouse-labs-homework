var nodemon = require('nodemon')
var bs = require('browser-sync').create()
var sass = require('node-sass')
var webpack = require('webpack')
var fs = require('fs')
var path = require('path')

// nodemon -----------

nodemon({
  script: 'server.js',
  ext: 'js json',
  ignore: 'public'
})

// Browser Sync ---------

var bsConfig = {
  ui: {
    port: 9001
  },
  port: 9000,
  proxy: 'http://localhost:8080',
  files: ['./public/styles/*.css', './public/scripts/*.js', './views/*.ejs'],
  browser: 'safari'
}

var browserSyncDelay = function (cb) {
  setTimeout(cb, 350)
}

// SASS config ---------

var sassConfig = {
  file: './styles/styles.scss',
  outputStyle: 'compressed'
}

var sassCallback = function (err, result) {
    if (err) {
      console.log(err.status) // used to be "code" in v2x and below
      console.log(err.column)
      console.log(err.message)
      console.log(err.line)
    }
    else {
      fs.writeFile('./public/styles/styles.css', result.css.toString(), function (err) {
        if (err) {
          console.log('Failed to write CSS file:', err)
        } else {
          console.log('------------> CSS Accomplished <-------------')
        }
      })
    }
}

// webpack config ----------

const webpackConfig = {
  entry: {
    app: './scripts/app.js'
  },
  output: {
    path: path.resolve(__dirname, '../public/scripts'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}

const runWebpack = () => {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      console.log('webpack error..', err.toString())
    }
    // logs to the terminal some useful stats
    console.log(stats.toString())
  })
}

// start nodemon watch ------

nodemon.once('start', () => {
  console.log('nodemon AcTiVaTe!!\nRunning browsersync init')
  browserSyncDelay( () => {
    bs.init(bsConfig)
    bs.watch('./styles/**/*.scss').on('change', () => { sass.render(sassConfig, sassCallback) })
    bs.watch('./scripts/**/*.js').on('change', runWebpack)
  })
}).on('restart', () => {
  browserSyncDelay( () => { bs.reload() })
})
