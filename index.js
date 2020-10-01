const http=require('http');
const server=http.createServer((req,res)=>
{
    res.setHeader('content-type','text/html');
    res.write('<html>' +
        '<head>' +
        '<title>'+
    'Design in new way'+
        '</title>'+
        '</head>' +
        '<body>' +
        '<h2>'+
    'Welcome to the new way of designing'+
        '</h2>'+
    '</body>'+
        '</html>');
    });
server.listen(3000,function()
{
    console.log("Welcome to the new server created on port number 3000");
});