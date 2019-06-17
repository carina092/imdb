<template>
  <section class="headerContainer">
    <section class="slider">
        <section class="topHeader">
          <router-link to="/" exact><div class="logo"></div></router-link>
          <div class="nav">
            <router-link to="/" exact>Movies</router-link>
            <router-link to="#" exact>Celebs &amp; Photos</router-link>
            <router-link to="#" exact>Community</router-link>
            <router-link to="#" exact>News</router-link>
          </div>
          <div class="userInfo">
            <div class="userSettings"><font-awesome-icon icon="cog" /></div>
            <div class="userProfile"></div>
          </div>
        </section>
        <slider />
    </section>
  </section>
</template>

<script>
import slider from './slider.vue';

export default {
  name: 'appheader',
  components: {
    slider,
  },
};
</script>
