const sql = require('./db')

const Cook = (name, lastName, username, email, password) => {
    this.name = name;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.password = password;
}


const insertCook = (name, lastName, username, email, password) => {
    console.log("DB")
    const newCook = { name, lastName, username, email, password }
    sql.query("INSERT INTO COOKS SET ?", newCook, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }
        console.log("created cook: ", { id: res.insertId, ...newCook });
    });
}

module.exports = { insertCook }