//http is a node core module.
const http=require('http');
const server=http.createServer();
server.on('connection',function(socket)
{
    console.log(socket);
});
//8080 is the default port. If we don't specify the port number it will take the default one.
server.listen(3000);
console.log('node server started on port number 3000');