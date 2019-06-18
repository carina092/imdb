<template>
  <section class="singlePostContainer">
    <div class="singlePost" v-for="(movie, index) in movies" :key="index">
      <div class="postContent">
        <img class="postImage" :src="`${movie.Poster}`"/>
        <div class="postDetails">
          <h4>{{ movie.Title }}</h4>
          <div class="postGenre">Adventure, Drama, Fantasy, Mystery</div>
          <div class="postRating"><font-awesome-icon icon="heart" /> 8.3</div>
        </div>
        <div class="postFavourites">
          <span><font-awesome-icon icon="plus" /></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'post',
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    getMovies(title) {
      this.movies = [];
      return fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=7697b086&s=${title}&type=movie&page=1`)
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          this.movies = responseJson.Search;
        });
    },
  },
  mounted() {
    this.getMovies('Harry Potter');
  },
};
</script>
