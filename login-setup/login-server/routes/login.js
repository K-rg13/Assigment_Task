const express = require('express');
const router = express.Router();
const Create = require('../models/create')


router.post('/',(req,res)=>{
    console.log("req",req.body)
    Create.findOne({username: req.body.Name, password:req.body.pass})
    .then((data)=>{
        console.log("data checking",data);
        if(data){
            res.status(200).json(data).end();
        }else{
            res.status(200).json(false).end()
        }
    })
 
})
 

  module.exports = router;