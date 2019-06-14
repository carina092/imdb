<template>
  <section class="headerContainer">
    <section class="slider">
      <section class="topHeader">
        <div class="logo"></div>
        <div class="nav">
          <span class="active">Movies</span>
          <span>Celebs &amp; Photos</span>
          <span>Community</span>
          <span>News</span>
        </div>
        <div class="userInfo">
          <div class="userSettings">Settings</div>
          <div class="userProfile"></div>
        </div>
      </section>

      <section class="sliderContent">
        <h1>movie.title</h1>
        <h6>movie.genre</h6>

        <button>Watch trailer</button>

        <h6>In theaters</h6>
        <h5>15 Oct, 2015 (USA)</h5>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: 'appheader',
};
</script>
