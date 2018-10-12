import Vue from 'vue'
import Router from 'vue-router'

const Coupon = () => import('./view/coupon/index.vue')
const Success = () => import('./view/success/index.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/coupon'
    },
    {
      path: '/coupon',
      name: 'coupon',
      component: Coupon
    }, {
      path: '/success',
      name: 'success',
      component: Success
    }
  ]
})
