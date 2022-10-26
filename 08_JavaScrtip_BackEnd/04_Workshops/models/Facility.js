const { Schema, model, Types } = require('mongoose')

const facilitySchema = new Schema({
    label: { type: String, required: true },
    iconUrl: { type: String },
    rooms: { type: [Types.obj], default: [], ref: 'Room' }

})

const Facility = model('Facility', facilitySchema)

module.exports = Facility