import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import { store } from './store/store.js';
import Accounting from 'accounting-js';

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

Vue.filter('currency', function(val) {
  return Accounting.formatMoney(val)
});

// Vue.component('global-component', {
//   template: '<div>A global component</div>'
// });

// Vue.component('global-component', function(resolve, reject) {
//   setTimeout(function() {
//     resolve({
//       template: '<div>A global component</div>'
//     })
//   }, 2000);
// });

// Vue.component('global-component', () => import('./components/Menu.vue'))

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
