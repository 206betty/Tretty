const express = require('express');
const userRouter = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');

const User = require('../models/user');

userRouter.post('/login', (req, res, next)=>{
    User.findOne({email: req.body.email})
        .exec()
        .then(user =>{
            if(user === null){
                return res.status(404).json({
                    message:'Auth failed'
                });
            }
            bcrypt.compare(req.body.password, user.password, (err, result) =>{
                if(err){
                    return res.status(401).json({ message: 'Auth failed' });
                }
                if(result){
                    const token = jwt.sign(
                        { email: user.email, userId: user._id },
                        process.env.JWT_KEY, 
                        { expiresIn: "1h" }
                    );
                    return res.status(200).json({
                        message:'Auth successful',
                        token,
                        user
                    });
                }
                res.status(401).json({ message: 'Auth failed' });
            })
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error:err
            });
        });
});


userRouter.delete('/:userId', (req, res, next) =>{
    User.remove({_id: req.params.userId})
    .exec()
    .then(result =>{
        res.status(200).json({
            message: 'User deleted'
        })
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
});


module.exports = userRouter;