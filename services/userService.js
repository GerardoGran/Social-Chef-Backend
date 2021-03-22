const { insertUser } = require('../db/userDb');

const createUser = async (username, name, email, password) => {
    try {
        return await insertUser(username, name, email, password)
    } catch (e) {
        throw new Error(e.mesage)
    }
}

module.exports = {
    createUser
}