const { insertRecipe, getRecipes } = require('../models/recipeDb')

// Validate new account and encrypt password
const createRecipe = async (title, description, prepTime, cookTime,
  ingredients, instructions, callback) => {
  try {
    await insertRecipe(title, description, prepTime, cookTime,
      ingredients, instructions)
      .then(() => {
        return callback(201, "Recipe published!");
      })
      .catch(() => {
        return callback(500, "Internal server error.");
      });
  } catch (err) {
    throw new Error(err.message)
  };
}


const getRecipeList = async(callback) => {
  await getRecipes((results) => {
    if (results.length != 0) {      
      return callback(results);
    } else {
      return callback(409, `No recipes found`);
    }
  })
}


module.exports = { createRecipe, getRecipeList }