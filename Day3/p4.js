const http = require('http');
const Users = [
    {id:1, name: 'Arpit jain',email: 'xyz@'},
    {id:2, name: 'Doremon',email: 'abc@'},
    {id:3, name: 'Archit',email: 'xxv@'}
];

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(JSON.stringify(Users));
});

server.listen(9000,(err)=>{
    if(err)
        console.log(err);
    else
    console.log("Server is listening on port 9000");
});