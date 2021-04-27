const sql = require('./db')

// Insert new Cook into the database
const insertRecipe = (title, description, prepTime, cookTime,
  ingredients, instructions) => {
  return new Promise((resolve, reject) => {

    // Create Cook object
    const newRecipe = {
      title, description, prepTime, cookTime,
      ingredients, instructions
    }
    sql.getConnection((err, connection) => {

      if (err) {
        console.error(err);
        reject();
        return;
      }
      console.log('MySQL Connection established: ', connection.threadId);
      connection.query("INSERT INTO RECIPES SET ?", newRecipe, (err, results) => {
        if (err) {
          console.log("error: ", err);
          reject();
          return;
        }
        console.log("created recipe: ", { id: results.insertId, ...newRecipe });
        // Close connection to MySQL CLearDB
        connection.release(err => { if (err) console.error(err) });
        resolve();
      });

    })
  })
}

module.exports = { insertRecipe }