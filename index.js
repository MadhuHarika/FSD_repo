const todo=require('./routes/to-dolist');
const  genres=require('./routes/genres');
const customers=require('./routes/customers');
const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/play-ground', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('connection established');
}).catch(()=>{
    console.log('connection failed');
});


app.use(express.json());

//Filters

app.use('/api/genres',genres);
app.use('/api/customers',customers);
app.use('/api/todos',todo);
// providing port info

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})



