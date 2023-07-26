// Importing 
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const passport = require('passport');
const passportStratergy = require('./config/passport');
const db = require("./config/database");

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());


app.use(router);

// Listening the Server
app.listen(PORT, (err) =>{
    if(err){
        console.log(`Server is giving  an error: ${err}`);
    }
    else{
        console.log(`Server is Successfully up and running`);
    }
})
