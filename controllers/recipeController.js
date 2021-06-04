const { createRecipe, getRecipeList, selectRandomRecipe } = require('../services/recipeService')

// Parse account info and call Service
const postRecipe = async (req, res, next) => {
  const { title, description, prepTime, cookTime,
    ingredients, instructions } = req.body

  // Additional validation for null values
  if (!title, !prepTime, !cookTime,
    !ingredients, !instructions) { res.sendStatus(500) }

  // Format to string
  const prepTimeString = `${prepTime.time} ${prepTime.unit}`
  const cookTimeString = `${cookTime.time} ${cookTime.unit}`
  const ingredientsString = ingredients.map(ingredient => `${ingredient.quantity},${ingredient.unit},${ingredient.name}`).join('\n')
  const instructionsString = instructions.join('\n')

  try {
    // Call async function
    await createRecipe(title, description, prepTimeString, cookTimeString,
      ingredientsString, instructionsString, (status, msg) => {
        res.status(status).send(msg)
      });
  } catch (e) {
    console.log(e.message)
    res.sendStatus(500)
  }
}

const getRandomRecipe = async (req, res) => {
  try {
    await selectRandomRecipe((recipe) => {
      prepTime = { time: recipe.prepTime.split(" ")[0], unit: recipe.prepTime.split(" ")[1] };
      cookTime = { time: recipe.cookTime.split(" ")[0], unit: recipe.cookTime.split(" ")[1] };

      const ingredients = [];
      recipe.ingredients.split("\n").map(ingredient => ingredients.push({ quantity: ingredient.split(",")[0], unit: ingredient.split(",")[1], name: ingredient.split(",")[2] }));

      serializedRecipe = {
        title: recipe.title,
        description: recipe.description,
        prepTime: prepTime,
        cookTime: cookTime,
        ingredients: ingredients,
        instructions: recipe.instructions.split("\n")
      }
      res.json(serializedRecipe);
    });
  } catch {
    console.log(err.message)
    res.sendStatus(500)
  }
}

const getRecipes = async (req, res) => {
  try {
    await getRecipeList((results) => {
      res.json(results)
    });
  } catch (err) {
    console.log(err.message)
    res.sendStatus(500)
  }
}

module.exports = { postRecipe, getRecipes, getRandomRecipe }