import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home/home.vue';
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css';// Progress 进度条样式
// import { getUserInfo } from '@/services/auth.service';
// import loginService from '@/api/login.js';
// import store from './store';
Vue.use(Router);

const router = new Router({
  routes: [
    { path: '/404', component: () => import('@/views/errorPage/404') },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/login/login.vue')
    },
    {
      name: 'energyScreen',
      path: '/energyScreen',
      component: () => import('@/views/energyScreen/energyScreen.vue')
    },
    // {
    //   name: 'energyScreen',
    //   path: '/energyScreen',
    //   component: () => import('@/views/energyScreen2/energyScreen.vue')
    // },
    {
      path: '/',
      component: Home,
      redirect: '/operationMonitorin',
      meta: { title: '雨量查询' },
      children: [
        {
          path: 'operationMonitorin',
          name: 'operationMonitorin',
          component: () => import('@/views/operation-monitorin/operation-monitorin.vue'),
          meta: { title: '表格' }
        }
      ]
    },
    {
      path: '/dataReport',
      component: Home,
      redirect: '/dataReport/userWaterData',
      meta: { title: '数据报表管理' },
      children: [
        {
          path: 'userWaterReport',
          name: 'userWaterReport',
          component: () => import('@/views/data-report/use-water-report.vue'),
          meta: { title: '用水' }
        },
        {
          path: 'userElectricityReport',
          name: 'userElectricityReport',
          component: () => import('@/views/data-report/use-electricity-report.vue'),
          meta: { title: '用电' }
        }
      ]
    },
    {
      path: '/basicAccount',
      component: Home,
      redirect: '/basicAccount/unitProfile',
      meta: { title: '基础台账管理' },
      children: [
        {
          path: 'unitProfile',
          name: 'unitProfile',
          component: () => import('@/views/basic-account/unit-profile.vue'),
          meta: { title: '单位概况' }
        },
        {
          path: 'waterManage',
          name: 'waterManage',
          component: () => import('@/views/basic-account/water-manage.vue'),
          meta: { title: '智能水表管理' }
        }
      ]
    },
    {
      path: '/monitoringWarning',
      component: Home,
      redirect: '/basicAccount/unitProfile',
      meta: { title: '基础台账管理' },
      children: [
        {
          path: 'waterMonitoring',
          name: 'waterMonitoring',
          component: () => import('@/views/monitoring-warning/water-monitoring.vue'),
          meta: { title: '用水监测管理' }
        },
        {
          path: 'warningManage',
          name: 'warningManage',
          component: () => import('@/views/monitoring-warning/warning-manage.vue'),
          meta: { title: '预警管理' }
        }

      ]
    },
    { path: '*', redirect: '/energyScreen', hidden: true }
  ]
});

/**
    * 获取用户菜单（导航栏菜单）
    */
// function getUserMenus() {
//   return new Promise((resolve, reject) => {
//     loginService.getUserMenus().then(res => {
//       resolve(res.result)
//     })
//   })
// };
/**
 * 获取用户资源
 */
// function getUserResources() {
//   return new Promise((resolve, reject) => {
//     loginService.getUserResources().then(res => {
//       resolve(res.result)
//     })
//   })
// }
// 路由拦截

router.beforeEach((to, from, next) => {
  NProgress.start();
  // if (to.name === 'login') {
  //   next();
  //   NProgress.done()
  // } else {
  //   if (!getUserInfo()) {
  //     next({
  //       name: 'login'
  //     });
  //     NProgress.done()
  //   } else {
  //     NProgress.done()
  //     next();
  //     // if (store.state.currUserMenus.length <= 0) {
  //     //   Promise.all([getUserMenus(), getUserResources()]).then(data => {
  //     //     store.state.currUserMenus = data[0] ? data[0].children : [];
  //     //     store.state.currUserResources = data[1]
  //     //     NProgress.done()
  //     //     next();
  //     //   })
  //     // } else {
  //     //   NProgress.done()
  //     //   next();
  //     // }

  //   }
  // }
  NProgress.done();
  next();
});

export default router;
