const authController = require("../controllers/authController")
const homeController = require("../controllers/homeController")
const blogController = require("../controllers/blogController")
const profileController = require("../controllers/profileController")
const { hasUser } = require('../middlewares/guard')
const catalogController = require("../controllers/catalogController")

module.exports = (app) => {

    app.use('/', homeController)
    app.use('/auth', authController)
    app.use('/blog',  blogController)
    app.use('/profile',hasUser(), profileController)
    app.use('/blogs', catalogController)
    // app.use('/:id/details', details)

    app.use('*', (req,res)=> {
        res.render('404')   
    })


}