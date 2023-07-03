const path = require('path')
const createExpoWebackConfigAsync = require('@expo/webpack-config')

module.exports = async function (env, args) {
  const config = await createExpoWebackConfigAsync(env, args)
  config.module.rules.push({
    test: /\.js$/,
    loader: 'babel-loader',
    include: [
      path.join(__dirname, 'node_modules/react-router-native')
    ]
  })

  return config
}
