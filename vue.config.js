const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080, // 指定端口
    // host: '0.0.0.0', // 允许外部访问
  }
})
