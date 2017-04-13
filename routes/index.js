var express = require('express')
var router = express.Router()

//REDIRECT FROM THE HOME PAGE TO SEE ALL THE SNACKS
router.get('/', (req, res, next) => {
  res.redirect('/snacks')
})

module.exports = router
