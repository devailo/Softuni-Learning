const hotelController = require('express').Router()

hotelController.get('/:id'), (req, res) => {
    res.render('details', {
        title: 'Hotel Details'
    })
}

module.exports = hotelController