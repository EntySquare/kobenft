const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  transpileDependencies: true,
  devServer: {
    proxy: {
      // 对 '/api' 路径的请求进行代理
      '/dev-api': {
        target: 'https://www.viabtc.net/', // 接口的域名
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/dev-api': '' // 重写路径
        }
      }
    }
  }
})