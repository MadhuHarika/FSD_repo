var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('search', { data:{ titleView: 'Search here'} });
});

module.exports = router;
