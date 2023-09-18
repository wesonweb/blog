const postcss = require('postcss')
const cssnano = require('cssnano')

module.exports = function (css) {
  return postcss([
    require('postcss-import'),
    require('cssnano')
  ])
  .process(css, { from: 'src/css/bundle.css', to: 'src/css/bundle.min.css' })
  .then(result => result.css)
}
