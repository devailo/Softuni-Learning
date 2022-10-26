const { Schema, model, Types} = require('mongoose')

const roomSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    city: { type: String, required: true },
    beds: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true, min: 1 },
    imgUrl: { type: String },
    facilities: {type: [Types.ObjId], default: [], ref: 'Facility'}
})

const Room = model('Room', roomSchema)

module.exports = Room