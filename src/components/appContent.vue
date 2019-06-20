<template>
  <section class="contentContainer">
    <section class="essentials">
      <div class="topBar">
        <div class="subNav">
          <router-link to="/" exact class="active">In theaters</router-link>
          <router-link to="#" exact>Coming soon</router-link>
          <router-link to="#" exact>Charts</router-link>
          <router-link to="#" exact>TV series</router-link>
          <router-link to="#" exact>Trailers</router-link>
          <router-link to="#" exact>More</router-link>
        </div>
        <div class="favourites">
          <div class="button">
            <font-awesome-icon icon="star" />
            <span>1337</span>
          </div>
        </div>
      </div>
      <div class="filters">
        <div class="listView">
          <font-awesome-icon icon="bars" />
        </div>
        <div class="gridView">
          <font-awesome-icon icon="th" />
        </div>
        <div class="ratingSlider">
          <span>IMDb Rating: {{ sliderValue }}</span>
          <rangeSlider
          class="slider"
          min="0"
          max="10"
          step="0.5"
          v-model="sliderValue">
          </rangeSlider>
        </div>
        <div class="search">
          <input type="text" v-model="searchString" />
          <font-awesome-icon icon="search" class="fa-flip-horizontal" />
        </div>
      </div>
    </section>
    <section class="postContainer">
        <post :searchString="searchString" />
      <div class="loadMore"><font-awesome-icon icon="ellipsis-h" /></div>
    </section>
  </section>
</template>

<script>
import rangeSlider from 'vue-range-slider';
import post from './post.vue';
import 'vue-range-slider/dist/vue-range-slider.css';

export default {
  name: 'appcontent',
  data() {
    return {
      searchString: 'Harry Potter',
      sliderValue: '6',
    };
  },
  components: {
    post,
    rangeSlider,
  },
};
</script>
