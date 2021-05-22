const { createRecipe, getRecipeList } = require('../services/recipeService')

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

const getRecipes = async (req, res) => {
  try {
    await getRecipeList((results) => {      
      res.json(results)
    });
  } catch(err) {
    console.log(err.message)
    res.sendStatus(500)
  }
}

module.exports = { postRecipe, getRecipes }