import axios, {AxiosResponse} from "axios";

class MovieDataBaseRepository{
    movieDbBaseUrl = 'https://api.themoviedb.org';

    public searchMovies = async (searchParameter: string) => {
        let result: AxiosResponse = await axios.get(`${this.movieDbBaseUrl}/3/search/movie?api_key=2b22e9de3ed842ea6bb39ee46e590a98&language=en-US&query=${searchParameter}&page=1&include_adult=false`);
        return result.data;
    };
}


export default new MovieDataBaseRepository();