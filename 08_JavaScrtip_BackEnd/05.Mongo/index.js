//const mongodb = require('mongodb')

const mongoose = require('mongoose')
const Person = require('./models/Person')

const connectionString = 'mongodb://localhost:27017/testdb'
start();


async function start() {

    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    // console.log('database connected');

    // await Person.create({
    //     firstName: 'penio',
    //     lastName: 'stavros',
    //     age: 25
    // })

    const data = await Person.find({})
    console.log(data);
    console.log(data[1].name);

    await mongoose.disconnect();
}