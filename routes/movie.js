const express = require('express');

const movieController = require('../controller/movie');

const router = express.Router();

router.get("/getMovies", movieController.getMovies);
router.post("/addMovie", movieController.addMovie);

module.exports = router;

