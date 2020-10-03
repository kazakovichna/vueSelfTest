// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from "./vuex/store"
import router from "./router/index"
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles.css'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');
