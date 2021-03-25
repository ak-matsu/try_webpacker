const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

// 設定ファイルの書き換え、jQueryを管理下に追加
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery',
  })
)

module.exports = environment
