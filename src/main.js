import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// <<<<<<< HEAD
import Xiao from "@lib/index.js"
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
Vue.config.productionTip = false;
Vue.use(Xiao);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Lazyload);
// =======
import Uk from "@lib"
import VueTouch from "vue-touch"
import "@common/style/index.css";
import { Card } from 'vant';

Vue.config.productionTip = false
Vue.use(Uk);
Vue.use(Card);
Vue.use(VueTouch,{name:'v-touch'});
// >>>>>>> c9cfe97fe1280af3cb7b3c4af0973151513e30e2
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
