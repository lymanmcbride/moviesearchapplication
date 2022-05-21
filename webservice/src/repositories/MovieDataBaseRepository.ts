import axios, {AxiosResponse} from "axios";
import {MoviesDatabaseApiError} from "../Erroros/MoviesDatabaseApiError";

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
        this.checkSuccessfulResponse(result);
        return result.data;
    };

    public getConfiguration = async () => {
        let result: AxiosResponse = await axios.get(`${this.movieDbBaseUrl}/configuration`, {params: {api_key: this.apiKey}});
        this.checkSuccessfulResponse(result);
        return result.data;
    };

    private checkSuccessfulResponse(result: AxiosResponse) {
        if (result.status != 200) {
            throw new MoviesDatabaseApiError('Could not get valid response from The Movie DataBase');
        }
    }
}


export default new MovieDataBaseRepository();