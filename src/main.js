import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faBars,
  faCog,
  faEllipsisH,
  faHeart,
  faPlus,
  faSearch,
  faStar,
  faTh,
} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebookSquare,
  faImdb,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import {
  faPlayCircle,
} from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import VueCarousel from 'vue-carousel';

import App from './App.vue';
import router from './router';

library.add(
  faBars,
  faCog,
  faEllipsisH,
  faFacebookSquare,
  faHeart,
  faImdb,
  faInstagram,
  faPlayCircle,
  faPlus,
  faSearch,
  faStar,
  faTh,
  faTwitter,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueCarousel);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
