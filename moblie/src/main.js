import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import axios from 'axios'
import 'vuetify/dist/vuetify.min.css'
import '@quasar/extras/material-icons/material-icons.css'
import touch from 'vue-directive-touch';

Vue.use(touch);
Vue.use(Vuetify)
Vue.prototype._axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')