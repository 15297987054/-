let path = require('path')
let fs = require('fs')
let config = require('../config')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let mpvueInfo = require('../node_modules/mpvue/package.json')
let packageInfo = require('../package.json')
let mkdirp = require('mkdirp')

exports.assetsPath = function (_path) {
  let assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  let cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }

  let postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: true
    }
  }

  let px2rpxLoader = {
    loader: 'px2rpx-loader',
    options: {
      baseDpr: 1,
      rpxUnit: 0.5
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    let loaders = [cssLoader, px2rpxLoader, postcssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    wxss: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  let output = []
  let loaders = exports.cssLoaders(options)
  for (let extension in loaders) {
    let loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}

const writeFile = async (filePath, content) => {
  let dir = path.dirname(filePath)
  let exist = fs.existsSync(dir)
  if (!exist) {
    await mkdirp(dir)
  }
  await fs.writeFileSync(filePath, content, 'utf8')
}

exports.writeFrameworkinfo = function () {
  let buildInfo = {
    'toolName': mpvueInfo.name,
    'toolFrameWorkVersion': mpvueInfo.version,
    'toolCliVersion': packageInfo.mpvueTemplateProjectVersion || '',
    'createTime': Date.now()
  }

  let content = JSON.stringify(buildInfo)
  let fileName = '.frameworkinfo'
  let rootDir = path.resolve(__dirname, `../${fileName}`)
  let distDir = path.resolve(config.build.assetsRoot, `./${fileName}`)

  writeFile(rootDir, content)
  writeFile(distDir, content)
}
