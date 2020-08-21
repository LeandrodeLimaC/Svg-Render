import Vue from 'vue'
import App from './App.vue'

import SvgIcon from '@/mixins/SvgIcon.vue'
Vue.component('svg-icon', SvgIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
