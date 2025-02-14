const http = require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
     res.end('Hello World');
});
server.listen(9000,(err)=>{
    if(err)
        console.error(err);
    else
    console.log("Server is listening on port 9000");
});