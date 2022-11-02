const express = require('express');

const hbs = require('express-handlebars').create({
    extname: '.hbs'
})

const cookieParser = require('cookie-parser')
const defaultTitle = require('../middlewares/defaultTitle');
const auth = require('../middlewares/auth');
const userNav = require('../middlewares/userNav');

const jwtSecret = 'dastyu789i'


module.exports = (app) => {

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs')

app.use(express.urlencoded({extended: true}))
app.use('/static', express.static('static'))
app.use(cookieParser())
app.use(auth(jwtSecret))
app.use(userNav())

app.use(defaultTitle('Dakov Housing'))}