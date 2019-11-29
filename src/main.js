import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import 'popper.js';
import 'bootstrap';
import 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRouter);

const router = new VueRouter({

});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
