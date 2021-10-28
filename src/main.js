import Vue from 'vue'
import {Vuelidate} from 'vuelidate'
import App from './App.vue'
import store from './store'

import main from './styles/main.scss'
Vue.use(Vuelidate)
const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  store,
  main,
  render: function (h) { return h(App) }
}).$mount('#app')
