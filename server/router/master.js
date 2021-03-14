require('../data/shopdata')

const express = require('express');
const router = express.Router();
const productModel = require('../models/product')


router.get('/', (req, res) => {
    productModel.find({}, (err, documents) => {
        if (err) {
            res.status(500).send('error')
        } else {
            const allImg = documents.map((product)=>{
                const answer = product.img.map((e)=>{
                    return `../public/images/${e}.jpg`
                })
                return answer;
            })
            console.log(allImg);
            res.status(200).send(documents);
        }
    })
});


module.exports = router;