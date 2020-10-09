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

//find the course

// const course = new Course({
//     name:'Spring',
//     author: 'Jane',
//     tags:['Spring','Middleware'],
//     isPublished: true,
//     price:34
// });
//
// async function createCourse()
// {
//     const result=await course.save();
//     console.log('Course created');
// }

//used to update the data by fetching the id.

/*async function updateCourse(id)
{
    const course=await Course.findById(id);
    console.log(course);
    if(!course) return;
    course.name='Spring';
    course.author='Jane';
    course.save();
    console.log(course);
}
updateCourse('5f7ff23386ef4d0d48d068fc').then(()=>{
    console.log('Course update success');
});*/
// updating lot of data at a time

// async function updateCourse()
// {
// const result=await Course.updateMany({author:'Mosh'},
//     {$set:{name:'Learning programming'}});
// console.log('course update success');
// }

//update for a single data

// async function updateCourse()
// {
//     const result=await Course.update({author:'Mosh'},{$set:{name:'Learning cricket'}});
//     console.log('course update success');
// }


// update the first data by using find by id

async function updateCourse(id)
{
let result=await Course.findByIdAndUpdate({_id:id},{$set:{name:'Learning C',author:'Balaguruswamy'}});
console.log(result);
}

updateCourse('5f7ff23386ef4d0d48d068fc').then(()=>{
    console.log('success');
})