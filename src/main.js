// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import 'es6-promise/auto'
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import router from './router/index'
import store from './store/index'
import App from './App'

import { AlertPlugin, ConfirmPlugin, ToastPlugin } from 'vux'
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)

Vue.use(VueRouter)

FastClick.attach(document.body)

Vue.config.productionTip = false

if (window.localStorage.getItem('chatXToken')) {
  let id = window.localStorage.getItem('chatXID')
  let token = window.localStorage.getItem('chatXToken')
  let name = window.localStorage.getItem('chatXName')
  let email = window.localStorage.getItem('chatXEmail')
  store.commit('successLogin', {
    id: id,
    token: token,
    name: name,
    email: email
  })
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {  // 判断该路由是否需要登录权限
    if (window.localStorage.getItem('chatXToken')) {  // 通过vuex state获取当前的token是否存在
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
