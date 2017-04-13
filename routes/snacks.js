var express = require('express')
var router = express.Router()
var knex = require('../db/connection')

//SEE ALL SNACKS
router.get('/', (req, res, next) => {
  knex('snacks')
  .orderBy('name')
  .then(snacks => {
    res.render('snacks/index', {snacks})
  })
})

//SEE THE ADD SNACK FORM
router.get('/new', (req, res, next) => {
  res.render('snacks/new')
})

//ADD A SNACK
router.post('/', (req, res, next) => {
  let newSnack = req.body
  knex('snacks')
  .insert(newSnack, '*')
  .then(snack => {
    res.redirect(`/snacks/${snack[0].id}`)
  })
})

//GET ONE SNACK (SEE ONE SNACK)
router.get('/:id', (req, res, next) => {
  knex('snacks')
  .where('id', req.params.id)
  .first()
  .then(snack => {
    res.render('snacks/showSnack', snack)
  })
})

//EDIT A SNACK (SHOW SNACK TO EDIT)
router.get('/:id/edit', (req, res, next) => {
  var id = req.params.id
  knex('snacks')
  .select('*')
  .where({ id })
  .first()
  .then(snack => {
    res.render('snacks/edit', snack)
  })
})

//UPDATE A SNACK
router.put('/:id', (req, res, next) => {
  let newSnack = req.body
  let id = req.params.id
  knex('snacks')
  .update(newSnack)
  .where('id', id)
  .then(snack => {
    res.redirect(`/snacks/${id}`)
  })
})

//DELETE A SNACK
router.delete('/:id', (req, res, next) => {
  let id = req.params.id
  knex('snacks')
  .del()
  .where({ id })
  .then(() => {
    res.redirect('/snacks')
  })
})

module.exports = router
