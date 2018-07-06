const express = require('express');
const makeRouter = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

makeRouter.post('/',(req, res, next) =>{ 
    // console.log(req.body)     //signup
    User.find({email: req.body.email})
    .exec()
    .then(user =>{
        if(user.length >= 1) {
            return res.status(409).json
            message:"User exists"
        }else{   
            bcrypt.hash(req.body.password, 10, (err, hash)=> {          //"password?"
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                }else{
                    const user = new User({
                        name: req.body.name,
                        email: req.body.email,
                        password: hash
                });
                user
                    .save()
                    .then(newUser =>{
                        const token = jwt.sign(
                            { email: newUser.email, userId: newUser._id },
                            process.env.JWT_KEY, 
                            { expiresIn: "1h" }
                        );
                        res.status(201).json({
                            message: 'User Created',
                            user: {
                                name: newUser.name,
                                email: newUser.email
                            },
                            token
                        });
                    })
                    .catch(err=>{
                        console.log(err);
                        res.status(500).json({
                            error:err
                        });
                    });
            }
        });
    }});  
});

module.exports = makeRouter;