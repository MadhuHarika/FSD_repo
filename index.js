const http=require('http');
const port=3000;
const hostName='localhost';
const server=http.createServer((req,res)=>{
    res.write('<h1>Keep learning to gain knowledge!!!</h1>');
}).listen(port,hostName,function(){
    console.log(`launched the new server http://${hostName}:${port}/`);
});
