import Vue from 'vue'
import Router from 'vue-router'
import CommonRoutes from './CommonRoutes'

Vue.use(Router)

export default new Router({
  routes: [
    ...CommonRoutes
  ]
})
