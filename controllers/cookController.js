const { createCook } = require('../services/cookService')

// Parse account info and call Service
const postCook = async (req, res, next) => {
    const { fname, lname, username, email, password } = req.body
    try {
        // Call async function
        await createCook(fname, lname, username, email, password, (status, msg) => {
            res.status(status).send(msg)
        });
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500)
    }
}

module.exports = { postCook }