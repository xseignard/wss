import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils'

import 'normalize.css'
import 'vue-material-design-icons/styles.css'
import '@/assets/base.scss'
import smoothscroll from 'smoothscroll-polyfill'
smoothscroll.polyfill()
import 'intersection-observer'

import { ObserveVisibility } from 'vue-observe-visibility'
Vue.directive('ov', ObserveVisibility)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  async created() {
    await this.$store.dispatch('getData')
  },
}).$mount('#app')
