const pool = require('./connection');

const getRecipes = (request, response) => {
  pool.query('SELECT * FROM recipes ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
  
const getRecipesById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM recipes WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  });
}
  
const createRecipe = (request, response) => {
  const { name } = request.body
  
  pool.query('INSERT INTO recipes (name) VALUES ($1)', [name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Recipe added with ID: ${result.insertId}`)
  });
}
  
const updateRecipe = (request, response) => {
  const id = parseInt(request.params.id)
  const { name } = request.body
  
  pool.query(
    'UPDATE recipes SET name = $1 WHERE id = $2',
    [name, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Recipe modified with ID: ${id}`)
    }
  );
}
  
const deleteRecipe = (request, response) => {
  const id = parseInt(request.params.id)
  
  pool.query('DELETE FROM recipes WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Recipe deleted with ID: ${id}`)
  });
}
  
module.exports = {
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
}