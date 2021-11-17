import Vue from 'vue'
import {Vuelidate} from 'vuelidate'
import App from './App.vue'
import store from './store'
import main from './styles/main.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'


Vue.use(Vuelidate)
const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  store,
  main,
  render: (h) => h(App),
  mounted() {
    AOS.init()
  },
}).$mount('#app')
