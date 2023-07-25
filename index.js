const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const db =require("./config/database");

const app = express();

app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());

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