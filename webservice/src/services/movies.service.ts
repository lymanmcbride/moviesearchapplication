import MovieDataBaseRepository from "../repositories/MovieDataBaseRepository";

class MoviesService{
    public getMoviesInfo = (searchParameter: string) => {
        let dataResult = MovieDataBaseRepository.searchMovies(searchParameter)
        return;
    };
}


export default new MoviesService();