

const express = require('express');
const router = express.Router();
const blogModel = require('../models/blog')

router.get('/', (req, res) => {
    blogModel.find({},(err,document)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(document)
        }
    })
});

router.get('/hello', (req, res) => {
    res.status(200).send("hello from server")
});

router.post('/',(req, res) =>{
    const newblog = new blogModel({
        ...req.body
    })
    blogModel.findById({id:1},(err, user) =>{
        newblog.save()
        .then(()=>{
            res.status(200).send("ok")
        })
        .catch((err) => {
            res.status(500).send('error')
            console.log(err)
        });
    })
    
})//not work post 


module.exports = router;