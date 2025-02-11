const fs = require('fs');
fs.rmdir('mydir',(e)=>{
    if(e){
        console.log('Error creating directory:',e);
    return;
    }
    console.log("Directory deleted successfully");
});