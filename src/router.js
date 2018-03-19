import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Uploader from './views/Uploader.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/uploader',
      name: 'uploader',
      component: Uploader
    }
  ]
})
