import cookService from '../services/cookService'

const { createCook } = cookService

const postCook = async (req, res, next) => {
    const { name, lastName, username, email, password } = req.body
    try {
        await createCook(name, lastName, username, email, password)

        res.sendStatus(201)
        next()
    } catch (err) {
        console.log(err.message)
        res.sendStatus(500) && next(error)
    }
}

export default { postCook: postCook }