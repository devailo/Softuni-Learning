const authController = require("../controllers/authController")
const homeController = require("../controllers/homeController")
const catalogController = require("../controllers/catalogController")
const searchController = require("../controllers/searchController")

module.exports = (app) => {
    
    app.use('/', homeController)
    app.use('/auth', authController)
    app.use('/toys', catalogController)
    app.use('/search', searchController)

    app.use('*', (req,res)=> {
        res.render('404')   
    })

}