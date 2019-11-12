let utils = require('./utils')
let config = require('../config')
// let isProduction = process.env.NODE_ENV === 'production'
// for mp
let isProduction = true

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  fileExt: config.build.fileExt
}
