const fs = require('fs');
const newdata="i am new data";
//const data=fs.readFileSync('data.txt','utf-8');
//console.log(data);
fs.writeFileSync('data.txt',newdata);