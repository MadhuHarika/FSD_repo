function firstname(fname)
{
    return fname;
}

module.exports.fname=firstname;


function lastname(lname)
{
    return lname;
}

module.exports.lname=lastname;

function fullconcat(fname,lname)
{
    return `My Full name is:`+fname+'  '+lname;
}
module.exports.fconcat=fullconcat;