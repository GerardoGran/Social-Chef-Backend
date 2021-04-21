const sql = require("mysql2")
const dbConfig = require("../config/db.config");

// Create connection to the db
var connection = sql.createPool({
	host: dbConfig.HOST,
	user: dbConfig.USER,
	password: dbConfig.PASSWORD,
	database: dbConfig.DB
});

module.exports = connection;