const { app } = require('../app');

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});