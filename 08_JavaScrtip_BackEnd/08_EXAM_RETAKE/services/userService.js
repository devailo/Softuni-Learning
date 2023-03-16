const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const JWT_SECRET = 'dsajkfy7d89syhn3q'

async function register(username, email, password) {
    const existing = await User.findOne({ username }).collation({ locale: 'en', strength: 2 })
    if (existing) {
        throw new Error('Username is taken')
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        username,
        email,
        hashedPassword
    })

    //TODO see if register - logs you in
    return createSession(user)
}

async function login(email, password) {
    const user = await User.findOne({ email }).collation({ locale: 'en', strength: 2 })
    if (!user) {
        throw new Error('incorrect email or password')
    }

    const hasMatch = await bcrypt.compare(password, user.hashedPassword)

    if (hasMatch == false) {
        throw new Error('incorrect email or password')
    }

    return createSession(user._id, user.username)

}

function createSession({ _id, username }) {
    const payload = {
        _id,
        username
    }

    return jwt.sign(payload, JWT_SECRET)
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET)
}

module.exports = {
    register,
    login,
    verifyToken
}