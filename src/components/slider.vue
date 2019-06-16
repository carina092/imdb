<template>
    <carousel class="sliderContent"
    :per-page="1"
    :paginationEnabled="true"
    paginationActiveColor="rgba(255, 255, 255, 1)"
    paginationColor="rgba(255, 255, 255, 0.5)"
    :paginationPadding="3"
    >
      <slide>
        <h1>The Martian</h1>
        <p class="movieGenre"><span>Adventure</span> <span>Sci-Fi</span> <span>Thriller</span></p>

        <button class="watchTrailer">
          Watch trailer
          <font-awesome-icon :icon="['far', 'play-circle']" />
        </button>

        <h4>In theaters</h4>
        <h5>15 Oct, 2015 (USA)</h5>
      </slide>
      <slide>
        <h1>The Martian</h1>
        <p class="movieGenre"><span>Adventure</span> <span>Sci-Fi</span> <span>Thriller</span></p>

        <button class="watchTrailer">
          Watch trailer
          <font-awesome-icon :icon="['far', 'play-circle']" />
        </button>

        <h4>In theaters</h4>
        <h5>15 Oct, 2015 (USA)</h5>
      </slide>
    </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import sliderContent from '../assets/data/sliderContent';

export default {
  name: 'slider',
  components: {
    Carousel,
    Slide,
  },
};
</script>
