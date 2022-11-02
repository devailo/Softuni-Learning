const { getAll } = require('../services/blogService')

const homeController = require('express').Router()

homeController.get('/', async (req,res) => {
    const allBlogs = await getAll()
    const firstThree = allBlogs.slice(0, 3)

    res.render('home', {
        title: 'Home Page',
        user: req.user,
        firstThree
    })
})

module.exports = homeController