const { getAll } = require('../services/toyService')
const getBySearch = require('../services/searchService')

const searchController = require('express').Router()

searchController.get('/', async (req, res) => {
    const toys = await getAll()
    res.render('search', {
        title: 'Search Page',
        user: req.user,
        toys
    })
})

searchController.post('/', async (req, res) => {
    const toys = await getBySearch(req.body.title, req.body.charity)
    res.render('search', {
        title: 'Search Page',
        user: req.user,
        toys
    })
})
module.exports = searchController