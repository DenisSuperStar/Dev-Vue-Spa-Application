import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/*import Vue Resource*/
import VueResource from 'vue-resource'


//Install BootstrapVue
Vue.use(BootstrapVue);
//Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(VueRouter);

/*Install Vue Resource*/
Vue.use(VueResource);


new Vue({
  router, /*Include router*/
  render: h => h(App)
}).$mount('#app'); 

