<template>
  <section class="contentContainer"> <!-- Todo: Separate into components -->
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
      <!-- Check if the current view is Grid or List. Default is grid. -->
      <div class="post">
        <div class="postImage">
          <span>post.poster</span>
        </div>
        <div class="postDetails">
          <span>post.title</span>
          <span>post.genre</span>
          <span>post.rating</span>
          <span>post.readmore</span>
        </div>
      </div>
      <!-- -->
      <div class="loadMore"></div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'appcontent',
};
</script>
