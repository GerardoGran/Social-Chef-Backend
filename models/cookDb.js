const sql = require('./db')

const insertCook = async (fname, lname, username, email, password) => {
    console.log("DB")
    const newCook = { fname, lname, username, email, password }
    sql.query("INSERT INTO COOKS SET ?", newCook, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        console.log("created cook: ", { id: res.insertId, ...newCook });
    });
}

module.exports = { insertCook }