function firstname(fname)
{
    if(fname=="")
    {
        return `input can't be empty!!`
    }
    else if(typeof fname === 'string' || fname instanceof String) {
        return `perfect one`;
    }
    else
    {
        return `can't be a number`;
    }
}

module.exports.fname=firstname;


function lastname(lname)
{
    try{
    if (!isNaN(lname))
        throw err;
    return 'your last name is: '+lname;
} catch(err)
{
    return'Please do not put numbers';
}
}


module.exports.lname=lastname;

function fullconcat(fname,lname)
{
    return `My Full name is:`+fname+'  '+lname;
}
module.exports.fconcat=fullconcat;