const express = require('express')
const router = express.Router()
const item = require('../services/item')

/* GET item listing. */
router.get('/', function (req, res, next) {
  try {
    res.json(item.getMultiple(req.query.page))
  } catch (err) {
    console.error(`Error while getting item `, err.message)
    next(err)
  }
})

module.exports = router
