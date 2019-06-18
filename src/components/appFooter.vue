<template>
  <section class="footerContainer">
    <div class="footer">
      <div class="logo">
        <img :src="image.brandlogo">
      </div>
      <div class="socials">
        <font-awesome-icon :icon="['fab', 'twitter']" />
        <font-awesome-icon :icon="['fab', 'facebook-square']" />
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </div>
      <div class="copyright">1990 - 2005 IMDB.com, INC</div>
    </div>
    <div class="footerMenu">Show menu</div>
  </section>
</template>

<script>
export default {
  name: 'appfooter',
  data() {
    return {
      image: {
        brandlogo: require('../assets/images/brandlogo.png'),
      },
    };
  },
};
</script>
