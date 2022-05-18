// export default ($axios: any) => ({
//   getMovies() {
//     return $axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2b22e9de3ed842ea6bb39ee46e590a98&language=en-US&query=marvel&page=1&include_adult=false`)
//   },
// })

class MoviesRepository {
  public async getMovies(searchCriteria: string) {
    return await this.$axios.$get(`https://api.themoviedb.org/3/search/movie?api_key=2b22e9de3ed842ea6bb39ee46e590a98&language=en-US&query=marvel&page=1&include_adult=false`);
  }
}

export default new MoviesRepository();
