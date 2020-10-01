const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url);
    console.log(req.header);
    console.log(req.method);
});
server.listen(3000);
console.log('server started on port 3000');