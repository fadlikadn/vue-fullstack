import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes';

import 'popper.js';
import 'bootstrap';
import 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition){
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
