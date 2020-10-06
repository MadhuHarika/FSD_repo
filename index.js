const bodyParser=require('body-parser');
const express=require('express');
const app=express();
app.use(bodyParser.urlencoded({extended: false}));
const adminRoutes=require('./routing/admin');
const shopRoutes=require('./routing/shop');
app.use(adminRoutes);
app.use(shopRoutes);
app.listen(3000,()=>{
    console.log('listening on http://localhost:3000');
})
