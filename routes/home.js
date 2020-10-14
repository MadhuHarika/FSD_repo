const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const homeData = require('../routes/home');
router.get('/home', (req, res, next) => {

    res.render('home',{pageTitle:'home'})
});

module.exports = router;