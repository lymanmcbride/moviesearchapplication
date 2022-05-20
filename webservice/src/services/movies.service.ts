import MovieDataBaseRepository from "../repositories/MovieDataBaseRepository";
import {MovieDataBaseSearchResult} from "../models/ExternalDtos/MovieDataBaseSearchResult";
import {MovieInfo} from "../models/InternalDtos/MovieInfo";

class MoviesService {
    public getMoviesInfo = (searchParameter: string) => {
        return this.getMoviesData(searchParameter)
            .then((movieDataBaseSearchResult: MovieDataBaseSearchResult) => this.mapToSingleMovieObject(movieDataBaseSearchResult));
    };

    private mapToSingleMovieObject(movieDataBaseSearchResult: MovieDataBaseSearchResult): MovieInfo[] {
        let movieSearchOutput: MovieInfo[] = [];
        for (let i = 0; i < 10; i++){
            let movie = movieDataBaseSearchResult.results[i];
            movieSearchOutput.push({
                movie_id: movie.id,
                title: movie.title,
                poster_image: movie.poster_path,
                popularity_summary: `Popularity: ${movie.popularity}. Number of Votes: ${movie.vote_count}`
            })
        }
        return movieSearchOutput;
    }

    private getMoviesData(searchParameter: string) {
        return MovieDataBaseRepository
            .searchMovies(searchParameter)
            .then((searchResult: MovieDataBaseSearchResult) => Promise.resolve(searchResult))
            .catch(() => Promise.reject("Could not get result from Movie Database"));
    }
}


export default new MoviesService();