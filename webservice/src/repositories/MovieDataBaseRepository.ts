import axios, {AxiosResponse} from "axios";

class MovieDataBaseRepository {
    movieDbBaseUrl = 'https://api.themoviedb.org/3';
    apiKey = '2b22e9de3ed842ea6bb39ee46e590a98';
    language = 'en-US';

    public searchMovies = async (searchParameter: string) => {
        let result: AxiosResponse = await axios.get(`${this.movieDbBaseUrl}/search/movie`, {
            params: {
                api_key: this.apiKey,
                language: this.language,
                query: searchParameter,
                page: 1,
                include_adult: false
            }
        });
        return result.data;
    };

    public getConfiguration = async () => {
        let result: AxiosResponse = await axios.get(`${this.movieDbBaseUrl}/configuration`, {params: {api_key: this.apiKey}});
        return result.data;
    };
}


export default new MovieDataBaseRepository();