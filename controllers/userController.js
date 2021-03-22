const userService = require('../services/userService')

const { createUser } = userService

const postUser = async (req, res, next) => {
    const { username, name, email, password } = req.body
    try {
        await createUser(username, name, email, password)

        res.sendStatus(201)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }
}

module.exports = { postUser }