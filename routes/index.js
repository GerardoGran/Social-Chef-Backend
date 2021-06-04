const express = require('express')
const { postCook } = require('../controllers/cookController')
const { postRecipe, getRecipes, getRandomRecipe } = require('../controllers/recipeController')
const router = express.Router()

// Create Account route
router.post('/cooks', (req, res) => {
  postCook(req, res, null);
});

// Create Account route
router.post('/recipes', (req, res) => {
  postRecipe(req, res, null);
});

// Get a random recipe
router.get('/recipes', (req, res) => {
  getRandomRecipe(req, res, null);
});

router.get('/recipelist', getRecipes)

// Test API connection
router.get('/', (req, res) => {
  console.log("Ding!")
  res.sendStatus(201);
})

module.exports = router