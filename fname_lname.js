function firstname(fname)
{
    return `My firstname is:`+fname;
}

module.exports.fname=firstname;


function lastname(lname)
{
    return `My lastname is:` +lname;
}

module.exports.lname=lastname;

function fullconcat(fname,lname)
{
    return `My Full name is:`+fname+'  '+lname;
}
module.exports.fconcat=fullconcat;