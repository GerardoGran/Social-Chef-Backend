const express = require('express')
const { postCook } = require('../controllers/cookController')

const router = express.Router()

// Create Account route
router.post('/cooks', (req, res) => {
  postCook(req, res, null);
});

// Test API connection
router.get('/', (req, res) => {
  console.log("Ding!")
  res.sendStatus(201);
})

module.exports = router