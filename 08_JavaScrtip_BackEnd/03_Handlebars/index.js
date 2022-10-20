const express = require('express');
const hbr = require('express-handlebars')



const app = express();

const handlebars = hbr.create({
    extname: '.hbs'
})

app.engine('.hbs', handlebars.engine)
app.set('view engine', '.hbs')

app.get('/',(req,res)=>{
    res.locals.message='oppa gangnam style'
    res.render('home', {
        response: 'op op op',
        title: 'titulno',
        contacts:[
            {name: 'gogo',
            email: 'gogo@abv.bg'},

            {name: 'bubu',
            email: 'bubu@abv.bg'}
        ]
    });
})

app.listen(3000);


