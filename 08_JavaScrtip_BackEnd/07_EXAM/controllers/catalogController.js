const { getAll } = require('../services/blogService');
const { parseError } = require('../util/parser');

const catalogController = require('express').Router();


catalogController.get('/', async (req, res) => {
    let blogs = []
    try {
        blogs = await getAll()
        res.render('blogs', { blogs, user: req.user })

    } catch (error) {
        res.render('home', {
            errors: parseError(error)
        })
    }

})



module.exports = catalogController