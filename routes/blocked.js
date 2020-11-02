var express = require('express');
var router = express.Router();
var passport = require('passport');

const {Blockedusers} = require('../models/blockedusers');
const {Customer} = require('../models/users');
router.get('/:userId', async function(req, res, next) {

    const blockers = await Blockedusers.find({userId: req.params.userId});
    console.log('Customer'+blockers);

    if (blockers.length==0) {
        console.log('No blockers found...Good!!');
        res.send({success: false,  message: "No blockers found"});
        //res.end();



    }
    else {
        console.log('Inside the blockers data');
        res.send({success: true, data: { blockers }});
            }});


router.post('/add-blocker',async function(req, res, next) {
    console.log(req.body);
    console.log("inside add blocker");

    const customer = await Customer.find({userId: req.body.blockuserId });
    console.log('Customer'+customer);
    if (!!customer) {
        let blockers = {
            userId: req.body.userId,
            blockedUserId: req.body.blockuserId,
        };
        console.log("Blocker data initialized");
        Blockedusers.create(blockers, (err, item) => {
            if (err) {

                console.log(err);
                res.end();
            }
            else {
                                res.redirect('/');
            }});

    }




});

router.delete('/unblock', async function(req, res, next) {
    console.log("Inside unblock");
    console.log(req.body.userId);
    console.log("Inside unblock");
    console.log(req.body.blockuserId);
    const result = await Blockedusers.deleteOne({userId:req.body.userId, blockedUserId:req.body.blockuserId});
    console.log(result);

    res.send({success: true,  message: "record deleted successfully.."});
    });


module.exports = router;

