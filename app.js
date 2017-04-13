//backbone for the snacks app

var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var favicon = require('serve-favicon')
var logger = require('morgan')
var override = require('method-override')
var path = require('path')

//Route files
var index = require('./routes/index')
var snacks = require('./routes/snacks')


//View engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(logger('dev'))
app.use(override('_method'))

app.use('/', index)
app.use('/snacks', snacks)

//catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

//error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
