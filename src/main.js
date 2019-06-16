import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import VueCarousel from 'vue-carousel';

import App from './App.vue';
import router from './router';
import store from './store';

library.add(faCog, faPlayCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueCarousel);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
