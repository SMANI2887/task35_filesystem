const express = require ('express');
const fs = require ("fs");
const  { type } = require ("os");

const app = express();

const d = new Date();
const time = d.toLocaleTimeString();
const realTime = time.slice(0,5).split(':').join('_');
console.log(realTime);

const date = d.toLocaleDateString();
const realDate = date.split('/').join('_');


const fileTitle = realDate  + '-' + realTime;
const newFileTitle = fileTitle.split(' ').join('');
console.log(newFileTitle);


app.get('/',(request, response) => {
    
    // first question solution
    fs.writeFile(`./newfiles/${newFileTitle}.txt`, newFileTitle, (err) => {
            if(err) console.log(err);
            console.log("File created.");
        });
    

    // second question answer
    fs.readdir('./newfiles', (err, files) => {
    if(err) console.log(err);
    files.forEach((file) => {
        console.log(file);

         
    })
    response.send(files)
})
})

const PORT=3001;
app.listen(PORT);
console.log(`Server is running ${PORT}`);
