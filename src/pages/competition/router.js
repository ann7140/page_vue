import Vue from 'vue'
import Router from 'vue-router'

import Details from '../competition/components/details/index.vue'
import Change from '../competition/components/change/index.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/change'
    },
    {
      path: '/change',
      name: 'change',
      component: Change
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    }
  ]
})
