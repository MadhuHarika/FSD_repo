const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router=express.Router();
const homData=require('../routes/user');
router.get('/',(req,res,next)=>{
    const names=homData.names;
    res.render('home',{pageTitle:'Add User'});
});
router.post('/add-user',(req,res,next)=>{
    names.push({pageTitle:'UserInput'});;
    res.redirect('/users');
});


module.exports=router;

