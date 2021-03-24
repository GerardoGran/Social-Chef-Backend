import { createPool } from "mysql";
import dbConfig from "../config/db.config";

// Create connection to the db
var pool = createPool({
	host: dbConfig.HOST,
	user: dbConfig.USER,
	password: dbConfig.PASSWORD,
	database: dbConfig.DB
});

// Open MySQL connection
pool.getConnection((err, connection) => {
	if (err) {
		connection.release();
		throw err;
	}
	console.log("Succesfully connected to the database")
})

export default pool