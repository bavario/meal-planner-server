const express = require('express');
const router = express.Router();

const recipeController = require('../controller/recipe');

router.route('/')
    .get(recipeController.index)
    .post(recipeController.new);

router.route('/:recipe_id')
    .get(recipeController.view)
    .patch(recipeController.update)
    .put(recipeController.update)
    .delete(recipeController.delete);   

module.exports = router;
