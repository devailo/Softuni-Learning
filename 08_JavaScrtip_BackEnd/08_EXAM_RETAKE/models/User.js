const {Schema, model} = require('mongoose')

//TODO add user props and validations
const userSchema = new Schema({
    username: {type: String, required: true, unique: true, minlength: [4, 'Username must be at least 4 characters long']},
    email: {type: String, required: true, unique: true, minlength: [10, 'Email must be at least 10 characters long']},
    hashedPassword: {type:String, required: true}
})

userSchema.index({username: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

userSchema.index({email: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

const User = model('User', userSchema)
module.exports = User