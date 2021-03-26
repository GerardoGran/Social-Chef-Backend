const { insertCook } = require('../models/cookDb')

const createCook = async (fname, lname, username, email, password) => {
    console.log("Service")
    try {
        return await insertCook(fname, lname, username, email, password)
    } catch (err) {
        throw new Error(err.mesage)
    }
}

module.exports = { createCook }