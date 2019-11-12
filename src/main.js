import Vue from 'vue'
import App from './App'
import Store from './store/'
import MinApp from 'minapp-promise'
Vue.prototype.$store = Store
Vue.prototype.$MinApp = MinApp
Vue.config.productionTip = false
// Vue.config._mpTrace = true
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
