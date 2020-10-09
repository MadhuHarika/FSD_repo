const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/play-ground', {useNewUrlParser: true, useUnifiedTopology: true});


const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: Date,
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses(){
    //let regex=/[by]/g;
    return Course
         .find({isPublished: true})
        // .and([{name: {$regex: /by/}}]) //regular expression match which contain by .
        // .and({price: { $gte: 12 }})
        //.or([{author:/M.*/i}]) // match a string which is starting with M.
        .and([{price: {$gte : 15}}])
        // .and ([{name:/.*by.*/i}])
        // .and ([{author:/M.*/i}])
        .sort('-price')
        .select('name author price tags isPublished');

}

async function run()
{
    const courses=await getCourses();
    console.log(courses);
}

run();