const { connect } = require('../routes');
const sql = require('./db')

const insertCook = async (fname, lname, username, email, password) => {
    console.log("DB")
    const newCook = { fname, lname, username, email, password }

    sql.getConnection((err, connection) => {
        if (err) console.error(err);
        console.log('MySQL Connection establiched: ', connection.threadId);
        connection.query("INSERT INTO COOKS SET ?", newCook, (err, results) => {
            if (err) {
                console.log("error: ", err);
                return;
            }
            console.log("created cook: ", { id: results.insertId, ...newCook });
            connection.release(err => { if (err) console.error(err) });
        });
    });
}

module.exports = { insertCook }