class MoviesRepository {
  baseUrl: string = 'http://localhost:6060';
  public async getMovies($axios: any, searchCriteria: string) {
    return await $axios.$get(`${this.baseUrl}/movies`, {params: {search: searchCriteria}});
  }
}

export default new MoviesRepository();
