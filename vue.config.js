// vue.config.js
// var path = require('path')
const express = require('express')
const app = express()
// const getUserResources = require('./src/mock/getUserResources.json') // 获取资源
// const getUserMenus = require('./src/mock/getUserMenus.json')
// const loginData = require('./src/mock/login.json')
// const logoutData = require('./src/mock/logout.json')
// const bmap = require('echarts/extension/bmap/bmap')
var apiRoutes = express.Router()
app.use('/mock', apiRoutes)

// function resolve(dir) {
//   return path.join(__dirname, './', dir)
// }

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'assets',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: 'index.html',
  lintOnSave: false,
  // externals: {
  // 	"BMap": bmap,
  // },
  devServer: {
    proxy: {
      '/slbems': {
        target: 'http://192.168.0.87:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/slbems': '/slbems'
        }
      }
    }
  }
}
