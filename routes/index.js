const express = require('express')

const { postUser } = require('../controllers/userController')

const router = express.Router()

router.post('/users', postUser)

module.exports = router