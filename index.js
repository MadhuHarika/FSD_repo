const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/play-ground', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function(){
        console.log('connected to db');
    }).catch(onerror=>{
        console.log('error connecting to db', onerror.message);
})

const studentSchema=new mongoose.Schema(
    {
        firstName:String,
        lastName:String,
        email:String,
        doj:{type:Date,default:Date.now()}
    }
);

const Student=mongoose.model('Student',studentSchema);

async function findStudentById(id)
{
    await Student.findById(id).then(result=>{
        console.log('found student',result);
    }).catch(error=>{
        console.log('error finding student with id',id);
    });
}



findStudentById('5f7ea3b669a9240898c5979f').then(()=>{
    console.log('finished finding the student');
}).catch(reason => {
    console.log('error finding the student');
});