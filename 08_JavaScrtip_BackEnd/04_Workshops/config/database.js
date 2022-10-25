const mongoose = require('mongoose')

const connectionString = process.env.DATABASE_CONNECTION_STRING || 'mongodb://localhost:27017/softuni-booking'

module.exports = async (app) => {
    try {
        await mongoose.connect(connectionString, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('Databse is ON!');
    } catch (err) {
        console.error('Error initialising database');
        console.error(err.message);
        process.exit(1)
    }
    
}