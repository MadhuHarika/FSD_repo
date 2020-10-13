const path = require('path');
const express = require('express');
const rootDir=require('../util/path');
const router=express.Router();
const names=[];

router.get('/users',(req,res,next)=>{
    res.render('users.pug',{pageTitle:'List of Users'});
});


module.exports.names=names;
module.exports.router=router;
