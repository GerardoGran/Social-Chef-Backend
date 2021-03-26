const express = require('express')
const { postCook } = require('../controllers/cookController')

const router = express.Router()

router.post('/cooks', (req, res) => {
  console.log('Route')
  await postCook(req, res, null);
  console.log('Exit Route')
});

// Test API connection
router.get('/', (req, res) => {
  console.log("Ding!")
  res.sendStatus(201);
})

module.exports = router