import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'

    //headers: {
    //
    //}

});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
