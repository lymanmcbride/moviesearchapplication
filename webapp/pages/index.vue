<template>
  <div>
    <v-row justify="center" align="center">
      <v-col
        cols="12"
        sm="6"
        md="3"
      >
        <v-form
          ref="form"
          lazy-validation
        >
          <v-text-field
            v-model="searchParameter"
            label="Movie Title Or Keywords"
            placeholder="Captain America..."
          ></v-text-field>
          <v-btn
            color="primary"
            @click="getResult"
          >
            Search
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
    <div v-for="movie of movies" :key="movie" class="movies">
      <div class="moviesInfo">
        <div class="title">{{ movie.title }}</div>
        <div>{{ movie.popularity_summary }}</div>
      </div>
      <div>
        <img :src="movie.poster_image" alt="Movie Poster"/>
      </div>
    </div>
  </div>
</template>

<script>
import MoviesRepository from "~/Repositories/MoviesRepository";

export default {
  name: 'IndexPage',
  data() {
    return {
      movies: [],
      searchParameter: ''
    }
  },
  methods: {
    getResult() {
      MoviesRepository.getMovies(this.$axios, this.searchParameter).then((res) => Promise.resolve(this.movies = res));
    },
  }
}
</script>

<style>
@import '~/assets/styles/movies.css';
</style>
