const express = require('express');
var uuidV4 = require('uuid/v4');
const router = express.Router();
const Create = require('../models/create')



router.post('/',(req,res)=>{
    console.log("req",req.body)
    const create = new Create({
    id:  uuidV4(),
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
    });
    create.save()
    .then(data=>{
        res.status(200).json(data);
    })
    .catch(err =>{
        res.json({mess:err});
    })
})
 

  module.exports = router;