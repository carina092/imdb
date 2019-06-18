<template>
  <section class="contentContainer">
    <section class="essentials">
      <div class="topBar">
        <div class="subNav">
          <span class="active">In theaters</span>
          <span>Coming soon</span>
          <span>Charts</span>
          <span>TV series</span>
          <span>Trailers</span>
          <span>More</span>
        </div>
        <div class="favourites">Favourites</div>
      </div>
      <div class="filters">
        <div class="listView">List</div>
        <div class="gridView">Grid</div>
        <div class="ratingSlider">Rating</div>
        <div class="search">Search</div>
      </div>
    </section>
    <section class="postContainer">
        <post />
      <div class="loadMore"><font-awesome-icon icon="ellipsis-h" /></div>
    </section>
  </section>
</template>

<script>
import post from './post.vue';

export default {
  name: 'appcontent',
  components: {
    post,
  },
};
</script>
