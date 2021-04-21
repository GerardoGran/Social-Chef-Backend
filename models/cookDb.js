const { connect } = require('../routes');
const sql = require('./db')

// Insert new Cook into the database
const insertCook = async (fname, lname, username, email, password) => {
    // Create Cook object
    const newCook = { fname, lname, username, email, password }
    sql.getConnection((err, connection) => {
        if (err) console.error(err);
        console.log('MySQL Connection established: ', connection.threadId);
        connection.query("INSERT INTO COOKS SET ?", newCook, (err, results) => {
            if (err) {
                console.log("error: ", err);
                return;
            }
            console.log("created cook: ", { id: results.insertId, ...newCook });
            // Close connection to MySQL CLearDB
            connection.release(err => { if (err) console.error(err) });
        });
    });
}

// Get a Cook by their email
const findCookByEmail = async (filter, callback) => {
    sql.getConnection((err, connection) => {
        if (err) console.error(err);
        console.log('MySQL Connection established: ', connection.threadId);
        console.log('find by email');
        connection.query("SELECT * FROM cooks WHERE email = ?", filter, (err, results) => {
            if (err) {
                console.log("error: ", err);
                return;
            }
            // Close connection to MySQL CLearDB
            connection.release(err => { if (err) console.error(err) });

            // Return results array
            return callback(results);
        });
    });
}

// Get a Cook by their username
const findCookByUsername = async (filter, callback) => {
    sql.getConnection((err, connection) => {
        if (err) console.error(err);
        console.log('MySQL Connection established: ', connection.threadId);
        console.log('find by user');
        connection.query("SELECT * FROM cooks WHERE username = ?", filter, (err, results) => {
            if (err) {
                console.log("error: ", err);
                return;
            }
            // Close connection to MySQL CLearDB
            connection.release(err => { if (err) console.error(err) });

            // Return results array
            return callback(results);
        });
    });
}

// Get a Cook by their username
const checkExistingAccount = async (filter, callback) => {
    sql.getConnection((err, connection) => {
        if (err) console.error(err);
        console.log('MySQL Connection established: ', connection.threadId);
        connection.query("SELECT * FROM cooks WHERE email = ? OR username = ?", filter, (err, results) => {
            if (err) {
                console.log("error: ", err);
                return;
            }
            // Close connection to MySQL CLearDB
            connection.release(err => { if (err) console.error(err) });

            // Return results array
            return callback(results);
        });
    });
}

module.exports = { insertCook, findCookByEmail, findCookByUsername, checkExistingAccount }