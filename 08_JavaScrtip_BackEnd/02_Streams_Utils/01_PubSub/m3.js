const emitter = require('./observer')

let runningTotal = 0;

emitter.on('message', (data) => {
    runningTotal += data;
    console.log('current running total is', runningTotal);
})