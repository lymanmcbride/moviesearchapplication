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

const getMovies =  (req: Request, res: Response, next: NextFunction) => {
    let result1 = moviesService.getMoviesInfo("marvel");
    return res.status(200).json({
        message: "worked"
    });
};

export default {getMovies};