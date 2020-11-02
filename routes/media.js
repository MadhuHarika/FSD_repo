var express = require('express');
var router = express.Router();
var passport = require('passport');
var uploader = require("../utility/uploader");

var fs = require('fs');
const {Media} = require('../models/media');
const {Newsfeed} = require('../models/newsfeed');
const {Comments} = require('../models/comments');
const mediaController = require('../controllers/mediadetails');

const {Customer} = require('../models/users');


router.get('/:userId', async function(req, res, next) {
    let customer = await Customer.findById({_id:req.params.userId});
    const medias = await Media.find({userId: req.params.userId});
    if (medias.length==0) {
        console.log('No Media found');
        res.render('media', { data:{ titleView: 'Media Page', customer: req.session.user , isAuthenticated: req.session.isLoggedIn} });
        res.end();

    }
    else {


        mediaController.getComments(medias,req.params.userId,function(err,comments){

        if (comments.length==0)  {
            res.render('media', { data:{ titleView: 'Media Page', customer: req.session.user , isAuthenticated: req.session.isLoggedIn,media: medias} });
        }else{
            res.render('media', { data:{ titleView: 'Media Page', customer: req.session.user , isAuthenticated: req.session.isLoggedIn,media: medias,comments: comments} });
        }
          
        })
    }});




router.post('/add-media',uploader.single('media'),async function(req, res, next) {

      let media = {
            userId: req.body.userId,
            mediatitle: req.body.mediatitle,
            description: req.body.description,
            tags: req.body.tags,
            effects: req.body.effects,
            media: {
              imgdata: new Buffer.from(fs.readFileSync(req.file.path), 'base64'),
              contentType: req.file.mimetype
          }

      };

        Media.create(media, (err, item) => {
            if (err) {

                console.log(err);
                res.end();
            }
            else {

                res.redirect('/media/'+req.body.userId);
            }});

});

router.delete('/:id', async function(req, res, next) {


    const result = await Media.deleteMany({_id:req.params.id});


    res.json({success: true,message:" Deleted"});


});



router.post('/many', uploader.array('image', 12), (req, res, next) => {
    let userId = req.body.userId;
    const files = req.files;
    const objs = [];

    req.files.forEach(file=>{
        objs.push({


                userId: userId,
                mediatitle: "test",
                description: "descr",
                tags: ["eee"],
                effects: "test",
                media: {
                    imgdata: new Buffer.from(fs.readFileSync(file.path), 'base64'),
                    contentType: file.mimetype
                }
            })

    });

    Media.insertMany(objs, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {

            res.redirect('/media/'+userId);
        }
    });
});



router.post('/add-comments',async function(req, res, next) {
    console.log(req.body);
    console.log("inside add comments");
    let newsfeed = {
        mediaId: req.body.mediaId,
        userId: req.body.username,
        postedDateTime: new Date()
    }


    console.log("Comments initialized");
    Newsfeed.create(newsfeed, (err, item) => {
        if (err) {

            console.log("Unable to create newsfeed" + err);
            res.end();
        }
        else {
            console.log("Inside else");
            console.log("Inside else"+item._id);
             let comments = {
                newsfeedId: item._id,
                userId: req.body.username,
                comments: req.body.comment,
                date: new Date()
            }
            console.log("Comments Initialized");
            Comments.create(comments,(errnew,commitem)=> {
                if (errnew) {
                    console.log("unable to create comments"+errnew);
                    res.end();
                } else
                    console.log("Comments created");
                    res.redirect('/media/'+req.body.username);

            })


        }});


});

router.get('/comments',async function(req, res, next) {
    console.log(req.body);
    console.log("inside get comments");
   });

module.exports = router;

