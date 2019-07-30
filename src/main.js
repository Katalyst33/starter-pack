
import '../public/scss/custom.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import NavBar from "./components/commons/NavBar";
import FooterArea from "./components/commons/FooterArea";




Vue.component('NavBar', NavBar);
Vue.component('FooterArea', FooterArea);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



