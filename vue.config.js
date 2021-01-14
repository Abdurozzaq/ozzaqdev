module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ozzaqdev/'
    : '/',
  pluginOptions: {
    cordovaPath: 'src-cordova'
  }
}
