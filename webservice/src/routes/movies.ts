import express from 'express';
import controller from '../controllers/moviescontroller';
import Moviescontroller from "../controllers/moviescontroller";
import MoviesService from "../services/movies.service";
const router = express.Router();

router.get('/movies', function (req, res){
    let searchParameter = !!req.query.search ? req.query.search : '';
    MoviesService.getMoviesInfo(searchParameter.toString()).then((result) => res.status(200).json({
        message: result
    }))
});

export = router;