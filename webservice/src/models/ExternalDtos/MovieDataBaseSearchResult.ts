import {MovieDataBaseMovieInfo} from "./MovieDataBaseMovieInfo";

export interface MovieDataBaseSearchResult {
    page: string,
    results: MovieDataBaseMovieInfo[],
    total_pages: string,
    total_results: string
}