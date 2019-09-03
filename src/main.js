import Vue from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
// import './element-variables.scss'
import 'font-awesome/css/font-awesome.css'
//  reset CSS
import 'normalize.css/normalize.css'
import '@/styles/bootstrap.css'
import '@/styles/index.scss' // global css
import '@/assets/fonts/iconfont.css'
import '@/assets/fonts/numberfont.css'
import '@/assets/rainFonts/iconfont.css'
import '@/assets/fonts/sysiconfont.css'
import 'echarts/extension/bmap/bmap'
import EVueContextmenu from 'e-vue-contextmenu'
import EVueEsrimapjs from 'e-vue-esrimapjs'

import eVueEchartsjs from 'e-vue-echartsjs'
Vue.use(eVueEchartsjs)
Vue.use(EVueEsrimapjs)
Vue.use(EVueContextmenu)
Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
