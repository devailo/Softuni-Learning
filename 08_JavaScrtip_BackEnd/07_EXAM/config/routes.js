const authController = require("../controllers/authController")
const homeController = require("../controllers/homeController")
const blogController = require("../controllers/blogController")
const profileController = require("../controllers/profileController")
const { hasUser } = require('../middlewares/guard')
const catalogController = require("../controllers/catalogController")

module.exports = (app) => {

    app.use('/', homeController)
    app.use('/auth', authController)
    app.use('/blog', hasUser(), blogController)
    app.use('/profile', profileController)
    app.use('/blogs', catalogController)

    app.use('*', (req,res)=> {
        res.render('404')   
    })


}