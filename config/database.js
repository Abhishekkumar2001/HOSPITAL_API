// Importing the mongoose
const mongoose = require('mongoose');

// Connetion to mongoDB
mongoose.connect(`mongodb://127.0.0.1:27017/HOSPITAL_DB`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', () => {
  console.log("Successfully connected to the Database");
});


module.exports = db;
