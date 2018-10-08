import Vue from 'vue'
import competition from '@/pages/competition/index.vue'

import '@/assets/style/public.scss'
import '@/assets/style/border.scss'
import router from './router.js'
// import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(competition)
}).$mount('#app')
