const path=require('path');
const express=require('express');
const rootDir=require('../util/path');
const router=express.Router();

router.get('/to-do',((req, res, next) => {
    res.sendFile(path.join(rootDir,'views','add_to_do.html'));
}));

router.post('/to-do',((req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add_to_do.html'));
}));

router.get('/retrieve',((req, res, next) => {
    res.sendFile(path.join(rootDir,'views','display.html'));
}));

router.post('/retrieve',((req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'display.html'));
}));


    module.exports=router;