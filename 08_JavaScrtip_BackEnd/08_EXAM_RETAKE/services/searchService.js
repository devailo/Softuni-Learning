const Toy = require('../models/Toy');


async function getBySearch(title, charity) {
    return await Toy.find({ title: { $regex: title, $options: 'i' }, charity: { $regex: charity, $options: 'i' } }).lean()
}


module.exports = getBySearch