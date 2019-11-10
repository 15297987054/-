import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import Container from "element-ui"
import top from "./lib/index.js"
import Pagination from 'vue-pagination-2'
Vue.component('pagination', Pagination)
Vue.use(top);
Vue.use(Element)
Vue.use(Container);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

