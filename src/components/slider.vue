<template>
    <carousel class="sliderContent"
    :per-page="1"
    :paginationEnabled="true"
    :mouse-drag="false"
    paginationActiveColor="rgba(255, 255, 255, 1)"
    paginationColor="rgba(255, 255, 255, 0.5)"
    :paginationPadding="3"
    :loop="true"
    :autoplayTimeout=5000
    :navigationEnabled="false"
    >
      <slide v-for="(slide, index) in slides" :key="index">
        <div class="sliderImage">
          <img :src="`${slide.backgroundImage}`"/>
        </div>
          <div class="sliderText">
            <h1>{{ slide.title }}</h1>
            <p class="movieGenre">
              <span v-for="(genre, index) in slide.genres" :key="index">{{ genre }}</span>
            </p>

            <button class="watchTrailer">
              Watch trailer
              <font-awesome-icon :icon="['far', 'play-circle']" />
            </button>

            <h4>In theaters</h4>
            <h5>{{ slide.releaseDate }}</h5>
          </div>
      </slide>
    </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import sliderContent from '../assets/data/sliderContent';

export default {
  name: 'slider',
  data() {
    return {
      slides: [],
    };
  },
  components: {
    Carousel,
    Slide,
  },
  mounted() {
    this.slides = sliderContent;
  },
};
</script>
