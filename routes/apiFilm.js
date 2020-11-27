const express = require('express');
const router = express.Router();
module.exports = router;
const apiFilmController=require("../controller/apiFilm");

router.get('/api/film',       apiFilmController.getFilm);
router.get('/api/film/:id',    apiFilmController.getFilm);
router.post('/api/film',      apiFilmController.insertFilm);
router.delete('/api/film/:id', apiFilmController.deleteFilm);
router.put('/api/film/:id',    apiFilmController.updateFilm);
