const fs=require('fs');
const newdata = "I am Append at the end of the file"
fs.appendFile("./data.txt",newdata,(err)=>{
    if(err)
        console.err(err);
    else
    console.log("Data Append Successfully!");
})