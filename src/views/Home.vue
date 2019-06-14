<template>
  <div class="container">
    <appheader />
    <appcontent />
    <appfooter />
  </div>
</template>

<script>
import appfooter from '../components/appFooter.vue';
import appheader from '../components/appHeader.vue';
import appcontent from '../components/appContent.vue';

export default {
  name: 'home',
  components: {
    appheader,
    appcontent,
    appfooter,
  },
};
</script>
