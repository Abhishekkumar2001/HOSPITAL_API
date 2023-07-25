const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please Enter Your Name"]
    },
    password : {
        type : String,
        required: [true, "Please Enter Your Password"],
        minLength: [6, "Password Should be greater than 6 characters"]
    }
});

const Doctor = new mongoose.model("Doctor", doctorSchema);

module.exports = doctorSchema;