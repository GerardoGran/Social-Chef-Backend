const { insertCook } = require('../models/cookDb')

const createCook = async (name, lastName, username, email, password) => {
    console.log("Service")
    try {
        return await insertCook(name, lastName, username, email, password)
    } catch (err) {
        throw new Error(err.mesage)
    }
}

module.exports = { createCook }