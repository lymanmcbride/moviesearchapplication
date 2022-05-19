class MoviesRepository {
  public async getMovies($axios: any, searchCriteria: string) {
    const result = await $axios.$get(`https://api.themoviedb.org/3/search/movie?api_key=2b22e9de3ed842ea6bb39ee46e590a98&language=en-US&query=${searchCriteria}&page=1&include_adult=false`);
    return result;
  }
}

export default new MoviesRepository();
