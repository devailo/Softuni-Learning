const { isGuest } = require('../middlewares/guard')
const { getFollowers } = require('../services/blogService')

const profileController = require('express').Router()


profileController.get('/', async (req, res) => {
    const followers = await getFollowers(req.user._id);
    res.render('profile', {
        user: req.user,
        followers,
    })
})


module.exports = profileController