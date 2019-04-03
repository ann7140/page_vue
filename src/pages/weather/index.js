import Vue from 'vue'
import getCoupon from './index.vue'

import '@/assets/style/public.scss'
import '@/assets/style/border.scss'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  render: h => h(getCoupon)
}).$mount('#app')
