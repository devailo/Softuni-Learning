const { Router } = require('express')

const router = Router();

router.get('/catalog', (req,res)=>{
    res.send('catalog page')
})

router.get('/:productId', (req,res)=>{
    console.log(req.params.productId);
    res.send('product details')
})

router.get('/:category/:Id', (req,res)=>{
    console.log(req.params);
    res.send('Nested Parameters: ' + req.params.category + ', ' + req.params.Id)
})

module.exports = router 