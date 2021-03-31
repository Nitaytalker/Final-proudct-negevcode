require('../data/shopdata')
const express = require('express');
const router = express.Router();
const userModel = require('../models/user')
const bcrypt = require('bcrypt');


const saltRounds = 10;

router.post('/login', (req, res) => {
    if (!req.body.email || !req.body.emailPassword) {
        res.status(400).send('Please enter required fields');
        return;
    }
    userModel.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            res.status(500).send('error')
            return
        } else {
            if (!user) {
                res.status(400).send('try again');
                return;
            }
            bcrypt.compare(req.body.emailPassword, user.emailPassword, function(err, result) {
                // result == true
                if(result){
                    res.status(200).send("secsses")
                }else{
                    res.status(400).send('try again');
                }
            });
            
        }
    })
})

router.post('/singup', (req, res) => {
    if (!req.body.email || !req.body.emailPassword || !req.body.firstname
        || !req.body.lastname || !req.body.birthdate) {
        res.status(400).send('Please enter required fields');
        return;
    }
        userModel.findOne({email:req.body.email},(err,user)=>{
            if (err) {
                res.status(500).send('error')
                return
            }else{
                if (user) {
                    res.status(400).send('this email was alredy registered');
                    return;
                }else{
                    
                    bcrypt.hash(req.body.emailPassword, saltRounds, function(err, hash) {
                        if (err) {
                            res.status(500).send('error')
                            return
                        }
                        const newUser = new userModel({
                            ...req.body,
                            emailPassword:hash
                        });
                    newUser.save().then(() => res.send("success")).catch((err) => console.log(err));
                    });
                    
                }
            }
        })
            
})

module.exports = router;