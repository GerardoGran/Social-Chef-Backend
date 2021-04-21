const { DB } = require('../config/db.config')
const { insertCook, checkExistingAccount, findCookByEmail } = require('../models/cookDb')
var crypto = require('crypto')


// Validate new account and encrypt password
const createCook = async (fname, lname, username, email, password, callback) => {
    // If no account exists with that email or username
    await checkExistingAccount([email, username], (results) => {
        try {
            // If results from checkExistingAccount is empty
            if (results.length === 0) {
                var hash = crypto.createHash('sha256').update(password).digest('base64');
                insertCook(fname, lname, username, email, hash);
                return callback(201, "Account created!");
            } else {
                findCookByEmail([email], (results) => {
                    if (results.length != 0) {
                        return callback(409, `Email "${email}" is already in use!`);
                    } else {
                        return callback(409, `Username "${username}" is already in use!`);
                    }
                });
            }
        } catch (err) {
            throw new Error(err.mesage)
        }
    });
}

module.exports = { createCook }