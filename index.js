const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/play-ground',{ useNewUrlParser: true , useUnifiedTopology: true} )
    .then(function(){
        console.log('Connected to Mongo');
    })
    .catch(reason => {
        console.log('Connection is not Unsuccessful..!',reason.message);
    })

const studentSchema=new mongoose.Schema(
    {
        firstName:String,
        lastName:String,
        email:String,
        doj:{type: Date,default:Date.now()}
    });

const Student=mongoose.model('Student',studentSchema);

async function getStudents()
{
    let result = await Student.find();
    console.log('displaying students',result);
    console.log('called getStudents()');
}

async function run()
{
    getStudents().then(function(){
        console.log('called run function');
    }).catch(error => {
        console.log(error.message);
    })
}
run().then(function () {
    console.log('finished running');

}).catch(error => {
    console.log(error.message);

});




