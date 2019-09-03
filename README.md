# 大屏展示

## 项目介绍

```shell
vue大屏展示
```


## 全局环境

```shell
node 10.14.1
npm 3.10.10
vue-cli3（注意）
```
## 技术栈

```shell
 * vue@2.6.6
 * vue-cli3
 * vuex
 * vue-router
 * axios
 * scss
 * element-ui
 * font-awesome
 * nprogress
```
## 视频改源码

```shell
    * 找到 xgplayer/dist/index.js 
    * 全局搜索 currentVideoIndex 修改如下
     function n() { e.currentVideoIndex + 1 < t.urlList.length ? (e.currentVideoIndex++ , e.video.autoplay = !0, e.src = t.urlList[e.currentVideoIndex], e.emit("playerNext", e.currentVideoIndex + 1)) : (e.currentVideoIndex = -1) } 
    * 说明，当下一集到最后一个是视频，让 e.currentVideoIndex = -1 重新等于 -1
```

# License

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)