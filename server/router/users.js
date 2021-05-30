require('../data/shopdata')
const express = require('express');
const router = express.Router();
const userModel = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
            bcrypt.compare(req.body.emailPassword, user.emailPassword, function (err, result) {
                // result == true
                if (result) {
                    const token = jwt.sign({ email: req.body.email }, user.key);
                    res.status(200).send({ token, firstname:user.firstname ,key:user.key})
                } else {
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
    userModel.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            res.status(500).send('error')
            return
        } else {
            if (user) {
                res.status(409).send('this email was alredy registered');
                return;
            } else {

                bcrypt.hash(req.body.emailPassword, saltRounds, function (err, hash) {
                    if (err) {
                        res.status(500).send('error')
                        return
                    }
                    const newUser = new userModel({
                        ...req.body,
                        key:"clientkey",
                        emailPassword: hash
                    });
                    newUser.save()
                        .then(() => {
                            const token = jwt.sign({ email: req.body.email }, 'clientkey');
                            res.status(200).send({ token })
                        })
                        .catch((err) => {
                            res.status(500).send('error')
                            console.log(err)
                        });
                });
            }
        }
    })
})

router.post(('/checktoken'), (req, res) => {
    // console.log(req.headers);
    const decoded = jwt.verify(req.headers.token, 'clientkey',function(err, decoded) {
        if(err){
            res.status(400).send( 'error' )
            return
        }
        
        res.status(200).send( decoded.email )
        // console.log(decoded.email) 
      });
})
 router.get('/getuserinfo',(req, res) => {
    // console.log(req.headers);
    const decoded = jwt.verify(req.headers.token, 'adminkey',function(err, decoded) {
        if(err){
            res.status(401).send( {error:'error permission'} )
            return
        }
        userModel.find({},(err, documents) => {
            if (err) {
                res.status(500).send('error');
            } else {
                res.status(200).send(documents);
            }
        })
      });
})

module.exports = router;