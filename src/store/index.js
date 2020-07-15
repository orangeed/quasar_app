import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMobile: false
  },
  mutations: {
    SET_MOBILE(state, isMobile) {
      state.isMobile = isMobile
    }
  },
  actions: {},
  modules: {}
})