import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Menu from './components/Menu.vue';

import 'popper.js';
import 'bootstrap';
import 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';
import { homedir } from 'os';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/menu', component: Menu },
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
