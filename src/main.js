import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'vue-popperjs/dist/vue-popper.css';
// import 'jquery/dist/jquery.js'


// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
  store: store,
}).$mount('#app')
