const Joi=require('joi');
const mongoose=require('mongoose');
const ToDo=mongoose.model('to-do',new mongoose.Schema({
    toDoName:String,
    required:Boolean,
    enum:['Requirement','Analysis','Design','Test','Deploy'],
    isCompleted:{type:Boolean,default:false}
}));




function validateToDo(todo){
    const schema={
toDoName:Joi.string().min(5).max(20),
enum:Joi.array().items(['Requirement','Analysis','Design','Test','Deploy'])
            };
    return Joi.validate(todo, schema);
}
module.exports.ToDo=ToDo;
exports.validate = validateToDo;