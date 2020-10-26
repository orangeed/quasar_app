import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    title: '首页',
    content: '',
    type: 'normal',
    overlay: false,
    message:''
  },
  mutations: {
    SET_DRAWER: (state, drawer) => {
      state.drawer = drawer
    },
    SET_TITLE: (state, title) => {
      state.title = title
    },
    SET_CONTENT: (state, content) => {
      state.content = content
    },
    SET_TYPE: (state, type) => {
      state.type = type
    },
    SET_OVERLAY: (state, overlay) => {
      state.overlay = overlay
    },
    SET_MESSAGE:(state,message)=>{
      state.message = message
    }
  },
  actions: {},
  modules: {}
})