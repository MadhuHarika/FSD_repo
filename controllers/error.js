exports.get404=(req,res,next)=>{
    res.status(404).render('errorpage',{pageTitle:'page not found',path:'/'});
}