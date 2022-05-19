import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Post {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

const getMovies = async (req: Request, res: Response, next: NextFunction) => {
    let result: AxiosResponse = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2b22e9de3ed842ea6bb39ee46e590a98&language=en-US&query=marvel&page=1&include_adult=false`);
    let dataResult = result.data;
    return res.status(200).json({
        message: dataResult
    });
};

export default {getMovies};