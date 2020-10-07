const path=require('path');
const bodyParser=require('body-parser');
const express=require('express');
const app=express();

const adminRoutes=require('./routes/adminRouter');
const publicRoutes=require('./routes/publicRouter');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use('/admin', adminRoutes);
app.use(publicRoutes);

app.listen(3000);
