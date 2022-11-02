const mongoose = require('mongoose')

//TODO: change adress for exam if needed
const CONNECTION_STRING = 'mongodb://localhost:27017/mindblogDb'

module.exports = async (app) => {
    try {
        await mongoose.connect(CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('database connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1)
    }
}