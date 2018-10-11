import Vue from 'vue'
import competition from '@/pages/orderDetails/index.vue'

import '@/assets/style/public.scss'
import '@/assets/style/border.scss'

// console.log(process.env.VUE_APP_BASE_URL)
// import router from './router.js'
// import store from './store'

Vue.config.productionTip = false

new Vue({
  // router,
  // store,
  render: h => h(competition)
}).$mount('#app')
