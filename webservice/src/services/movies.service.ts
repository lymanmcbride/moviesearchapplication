import MovieDataBaseRepository from "../repositories/MovieDataBaseRepository";
import {MovieDataBaseSearchResult} from "../models/ExternalDtos/MovieDataBaseSearchResult";
import {MovieSearchOutputDto} from "../models/InternalDtos/MovieSearchOutputDto";
import {ConfigurationDto} from "../models/ExternalDtos/ConfigurationDto";

class MoviesService {
    public getMoviesInfo = (searchParameter: string) => {
        let baseImageUrl: string;
        this.getBaseImageUrl().then((url) => baseImageUrl = url);
        return this.getMoviesData(searchParameter)
            .then((movieDataBaseSearchResult: MovieDataBaseSearchResult) => MoviesService.mapToMovieSearchOutputArray(movieDataBaseSearchResult, baseImageUrl));
    };

    private getBaseImageUrl() {
        return MovieDataBaseRepository
            .getConfiguration()
            .then((configurationDto: ConfigurationDto) => Promise.resolve(`${configurationDto.images.secure_base_url}${configurationDto.images.logo_sizes[1]}`))
            .catch(() => Promise.reject('Could not get configuration from Movie Database'));
    }

    private static mapToMovieSearchOutputArray(movieDataBaseSearchResult: MovieDataBaseSearchResult, baseImageUrl: string): MovieSearchOutputDto[] {
        let movieSearchOutput: MovieSearchOutputDto[] = [];
        for (let i = 0; i < 10; i++) {
            let movie = movieDataBaseSearchResult.results[i];
            movieSearchOutput.push({
                movie_id: movie.id,
                title: movie.title,
                poster_image: `${baseImageUrl}${movie.poster_path}`,
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