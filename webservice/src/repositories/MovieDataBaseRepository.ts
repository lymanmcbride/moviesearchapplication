import axios, {AxiosResponse} from "axios";

class MovieDataBaseRepository{
    public searchMovies = async (searchParameter: string) => {
        let result: AxiosResponse = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2b22e9de3ed842ea6bb39ee46e590a98&language=en-US&query=${searchParameter}&page=1&include_adult=false`);
        return result.data;
    };
}


export default new MovieDataBaseRepository();