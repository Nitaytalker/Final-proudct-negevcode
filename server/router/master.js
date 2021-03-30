require('../data/shopdata')

const express = require('express');
const router = express.Router();
const productModel = require('../models/product')


router.get('/', (req, res) => {
    productModel.find({}, (err, documents) => {
        if (err) {
            res.status(500).send('error')
        } else {
            res.status(200).send(documents);
        }
    })
});

router.get('/id/:id', (req, res) => {
    productModel.find({id:req.params.id}, (err, documents) => {
        if (err) {
            res.status(500).send('error')
        } else {
            res.status(200).send(documents);
        }
    })
});

router.get('/category/:category', (req, res) => {
    productModel.find({category:req.params.category}, (err, documents) => {
        if (err) {
            res.status(500).send('error')
        } else {
            res.status(200).send(documents);
        }
    })
});

// routet.find('/search',(req,res)=>{
//     productModel.find
// })


module.exports = router;