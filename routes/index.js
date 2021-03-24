const express = require('express')
const { postCook } = require('../controllers/cookController')

const router = express.Router()

router.post('/cooks', (req, res) => {
  postCook;
});

module.exports = router