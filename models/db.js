const sql = require("mysql")
const dbConfig = require("../config/db.config");
const { connect } = require("../routes");

// Create connection to the db
var connection = sql.createConnection({
	host: dbConfig.HOST,
	user: dbConfig.USER,
	password: dbConfig.PASSWORD,
	database: dbConfig.DB
});

// Open MySQL connection
connection.connect(error => {
	if (error) throw error;
	console.log("Succesfully connected to the database")
})

module.exports = connection;