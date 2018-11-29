import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Index from '@/pages/index/index'
import Home from '@/pages/index/home'
import Flower from '@/pages/index/flower'
import User from '@/pages/index/user'
import Shop from '@/pages/index/shop'
import Search from '@/pages/index/search'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Index',
      component: Index,
      children: [{
        path: '/flower',
        component: Flower
      }, {
        path: '/user',
        component: User
      }, {
        path: '/shop',
        component: Shop
      }, {
        path: '/search',
        component: Search
      }, {
        path: '/home',
        name: 'Home',
        component: Home
      }]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
