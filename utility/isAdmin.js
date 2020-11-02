
module.exports = function(req, res, next){
    console.log('to check if user is admin or not');
    if(req.user.role === 'admin'){
        next();
    } else {
        res.json({ success: false, message: "Access denied" });
    }
}
