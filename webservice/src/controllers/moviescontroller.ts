import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import moviesService from "../services/movies.service";
import MovieDataBaseRepository from "../repositories/MovieDataBaseRepository";
interface Post {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

const getMovies =  (searchParameter: string, res: Response) => {
    let result1 = moviesService.getMoviesInfo(searchParameter);
    return res.status(200).json({
        message: result1
    });
};

export default {getMovies};