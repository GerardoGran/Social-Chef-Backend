const { app } = require('../app');

// set port, listen for requests
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running...");
});