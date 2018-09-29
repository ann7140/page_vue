import Vue from 'vue'
import Router from 'vue-router'

import Details from './view/details/index.vue'
import Change from './view/change/index.vue'
import List from './view/list/index.vue'
import Ranking from './view/ranking/index.vue'

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
    }, {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking
    }
  ]
})
