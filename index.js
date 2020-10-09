const route=require('./routes/routes-mongo');
const route2=require('./routes/global');
const express=require('express');
const app=express();
app.use(express.json());
const mongoose=require('mongoose');

app.use('/api/genres',route);
app.use(route2);

mongoose.connect('mongodb://localhost/vidly', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('connected to mongodb');
    }).catch(()=>{
        console.log('error connecting to mongodb');
});
app.listen(3000,()=>{
    console.log('listening on port 3000');
})







