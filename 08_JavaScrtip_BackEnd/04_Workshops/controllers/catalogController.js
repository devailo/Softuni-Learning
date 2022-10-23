const { getAll, getById } = require('../services/roomService');

const router = require('express').Router();

router.get('/', (req,res) => {
    const search = req.query.search || ''
    const city = req.query.city || ''
    const fromPrice = req.query.fromPrice || 1
    const toPrice = req.query.toPrice || 1000

    const rooms = getAll(search,city,fromPrice,toPrice)

    res.render('catalog', {
        title: 'All Accomodations',
        rooms,
        search,
        city,
        fromPrice,
        toPrice
    })
})

router.get('/:id', (req,res) => {
    const roomId = req.params.id
    const room = getById(roomId)

    if (room) {
        res.render('details', {
            title: 'Acoomodatoin Details',
            room
        })
    }else{
        res.render('roomNotFound', {
            title: 'Not Found',
            roomId
        })
    }
})

module.exports = router;