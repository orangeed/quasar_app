import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './quasar'
import axios from 'axios'
import animated from 'animate.css'
import myCom from './components/index'
import './permission'


Vue.use(animated)
Vue.use(myCom)


Vue.prototype.$axios = axios


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')