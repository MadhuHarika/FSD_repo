const http=require('http');
const customers=[
    {id:1,name:'Madhu'},
    {id:2,name:'Harika'},
    {id:3,name:'JaNandipatine'},
]

const server=http.createServer(function(req,res){

    let url=req.url;
    console.log(url);
    if (req.url==="/")
    {
        res.write('<h1>home page for my app</h1>');
        res.end();
    }
    else if (req.url==='/api/customers')
    {
        res.write(JSON.stringify(customers));
        res.end();
    }
    else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h2>no page found</h2>');
        res.end();
    }

});
const port =  3000;
server.listen(port, () => console.log(`Listening on port ${port}...`));