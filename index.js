const express = require('express');
const router = require('./routes/router');

const app = express();

// Port
const port = 5000;

app.use(router);

// Listening the Server
app.listen(port, (err) =>{
    if(err){
        console.log(`Server is giving  an error: ${err}`);
    }
    else{
        console.log(`Server is Successfully up and running`);
    }
})