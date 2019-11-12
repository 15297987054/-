import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import sys from './modules/sys'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    sys,
    user
  },
  getters
})

export default store
