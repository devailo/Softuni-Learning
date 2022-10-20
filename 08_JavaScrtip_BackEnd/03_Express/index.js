const express = require('express');
const catalogController = require('./catalogController')
const createController = require('./createController')
const hbr = require('express-handlebars')



const app = express();
hbr.

app.use(express.static('static'))

app.use('/create', createController)
app.use('/catalog', catalogController)

app.all('*', (req,res) =>{
    res.send('ERROR')
})
app.listen(3000);


