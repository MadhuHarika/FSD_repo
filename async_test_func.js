function myfunc(message)
{
    console.log(message);
    setTimeout(myfunc1,15000);
    console.log('Hello my name is Madhu');
}
function myfunc1()
{
    console.log('welcome');
}

myfunc("Mr. Kanishk");