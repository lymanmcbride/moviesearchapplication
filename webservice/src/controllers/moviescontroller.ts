import MoviesService from "../services/movies.service";

class MoviesController {
    public getMovies =  (searchParameter: string) => {
        return MoviesService.getMoviesInfo(searchParameter).then((result) => Promise.resolve(result));
    };
}


export default new MoviesController();