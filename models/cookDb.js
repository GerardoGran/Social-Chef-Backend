import { pool as sql } from './db.js'

const Cook = (name, lastName, username, email, password) => {
    this.name = name;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.password = password;
}


const insertCook = (name, lastName, username, email, password) => {
    const newCook = { name, lastName, username, email, password }
    sql.query("INSERT INTO COOKS SET ?", newCook, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created cook: ", { id: res.insertId, ...newCook });
        result(null, { id: res.insertId, ...newCook });
    });
}

export default Cook;