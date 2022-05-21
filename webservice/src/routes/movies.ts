import express from 'express';
import MoviesController from "../controllers/moviescontroller";
import {MoviesDatabaseApiError} from "../Erroros/MoviesDatabaseApiError";

const router = express.Router();

router.get('/movies', function (req, res, next) {
    if (!req.query.search) {
        res.status(400).json({
            message: "Search Parameter is Required"
        });
    } else {
        let searchParameter = req.query.search.toString();
        MoviesController
            .getMovies(searchParameter)
            .then((result) => res.status(200).json(result))
            .catch((error) => {
                if (error instanceof MoviesDatabaseApiError) {
                    Promise.resolve(
                        (
                            res.status(error.statusCode).json({
                                message: error.message
                            })
                        ))
                } else {
                    next(error)
                }
            });
    }
});

export = router;