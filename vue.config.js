const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080, // 指定端口
    host: '0.0.0.0', // 允许外部访问
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      },
      'https://i0.hdslb.com': {
        target: 'https://i0.hdslb.com', // 目标服务器的完整 URL
        changeOrigin: true,
        // secure: true, // 如果目标服务器支持 https，设置为 true
        // logLevel: 'debug', // 可选：打印详细的代理日志，方便调试
      },
    }
  }
})
