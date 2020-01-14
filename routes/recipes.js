const express = require('express');
const router = express.Router();

const db = require('../queries/recipes');

router.get('/', db.getRecipes);
router.get('/:id', db.getRecipeById);
router.post('/', db.createRecipe);
router.put('/:id', db.updateRecipe);
router.delete('/:id', db.deleteRecipe);

module.exports = router;
