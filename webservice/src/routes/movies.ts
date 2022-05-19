import express from 'express';
import controller from '../controllers/moviescontroller';
const router = express.Router();

router.get('/movies', controller.getMovies);

export = router;