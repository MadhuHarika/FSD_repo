const readline = require('readline');
const mongoose = require('mongoose');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
mongoose.connect('mongodb://localhost/play-ground', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connected to mongodb');
    }).catch(err => {
    console.log('not connected to db');
});

const cardSchema = new mongoose.Schema({
    name: String,
    age: Number,
    status: String,
    groups: [String]
});

const Card = mongoose.model('Card', cardSchema);
card = new Card();
let answers = [];
let name = '';
let age = '';
let status = '';
let tempgroup = [];
//  reading of card data
/*async function readData()
{
rl.question('name? age? status? groups?', answer => {
    answers=answer.split(',');
    console.log(answers);
    name=answers[0];
    age=answers[1];
    status=answers[2];
    tempgroup=answers[3].split(' ');
    card.set({name:name});
    card.set({age: parseInt(age)});
    card.set({status:status});
    card.set({groups:tempgroup});
    card.save();
    rl.close();
});
}

readData().then(()=>{
    console.log('added card information successfully.');
}).catch(reason => {
    console.log('could not add card info',reason.message);
});*/

//Finding the data
/*async function findCardData() {
    return Card
        //To find the card info based on status
        //.find({status: 'eligible'})
        .find({name:'kanishk'}) // finding the data based on name
        //To find the card info based on age less then 18
        //.find({age:{$lte:18}})
        //displays the card data based on descending order of age.
        .sort({age:-1})
        //displays the total card info
        .select('name age status groups');
}

async function run() {
    const cards = await findCardData();
    console.log(cards);
}
run();*/


// Updating the data for 1 record based on id

/*async function updateCardData(id) {
    const card=await Card.findById(id);
    if (!card)
        return;
    card.name='harika';
    card.save();
    console.log('card details updated');
}
updateCardData('5f802c42b9e4af34609265d7').then(()=>{
    console.log('updated card info');
});*/


//updating  record by fetching by id at the same time
/*async  function updateCardData(id) {
    const card=await Card.findByIdAndUpdate({_id:id},{$set:{name:'MadhuH', age:30}},{new:true});
console.log(card);
}

updateCardData('5f802c42b9e4af34609265d7').then(()=>{
    console.log('updated card info');
});*/

//updating  first record
/*async  function updateCardData() {
    const card=await Card.update({name:'MadhuH'},{$set:{name:'MadhuN', age:31}},{new:true});
    console.log(card);
}

updateCardData().then(()=>{
    console.log('updated card info');
});*/

//delete one

async  function deleteCardData() {
    const card=await Card.deleteOne({name:'MadhuN'});
    console.log(card);
}

deleteCardData().then(()=>{
    console.log('updated card info');
});



