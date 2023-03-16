const {model, Types, Schema} = require('mongoose');

const URL_PATTERN = /^https?:\/\/.+$/i

const toySchema = new Schema({
    title: {type: String, required: true, minlength: [10, 'Title must be at least 10 characters long']},
    charity: {type: String, required: true, minlength: [2, 'Charity must be at least 2 characters long']},
    image: {type : String, required: true, validate: {
        validator: (value) => URL_PATTERN.test(value),
        message: 'Image URL is not valid'
    }},
    category: {type: String, required: true, minlength: [5, 'Category must be at least 5 characters long']},
    description: {type: String, required: true, minlength: [10, 'Content must be at least 10 characters long'], maxlength: [100, 'Title mustn\'t be more than 100 characters']},
    price: {type: Number, required: true, min: [0.01, 'Price must be a positive number']},
    buyList: {type: [Types.ObjectId], ref: 'User', default: []},
    owner: {type: Types.ObjectId, ref: 'User', required: true}
})

const Toy = model('Toy', toySchema)

module.exports = Toy;