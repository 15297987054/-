import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Tools from "@lib"
// import VueTouch from "vue-touch"
import "@common/filter"
Vue.config.productionTip = false

Vue.use(Tools);
// Vue.use(VueTouch, {name: 'v-touch'})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
