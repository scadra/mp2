// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path');

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-plugin-typescript', //Need to be the last : if not ts-loader will be by passed ! -,
    }
  ],
  chainWebpack: (config) => {
    config.resolve.alias
      .set('Assets', path.resolve(__dirname, './src/assets/'))
      .set('Aspsp', path.resolve(__dirname, './src/aspsp/'))
      .set('Components', path.resolve(__dirname, './src/components/'))
      .set('Config', path.resolve(__dirname, './src/config/'))
      .set('Constants', path.resolve(__dirname, './src/constants/'))
      .set('Interfaces', path.resolve(__dirname, './src/services/interfaces/'))
      .set('Layouts', path.resolve(__dirname, './src/layouts/'))
      .set('Models', path.resolve(__dirname, './src/models/'))
      .set('Pages', path.resolve(__dirname, './src/pages/'))
      .set('Styles', path.resolve(__dirname, './src/styles/'))
      .set('Services', path.resolve(__dirname, './src/services/impl/'))
      .set('Templates', path.resolve(__dirname, './src/templates/'))
      .set('Store', path.resolve(__dirname, './src/store/'))
      .set('Utils', path.resolve(__dirname, './src/utils/'))
  },
}
