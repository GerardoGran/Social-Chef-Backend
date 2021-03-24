const { createCook } = require('../services/cookService')

const postCook = async (req, res, next) => {
    const { name, lastName, username, email, password } = req.body
    try {
        await createCook(name, lastName, username, email, password)

        res.sendStatus(201)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }
}

module.exports = postCook