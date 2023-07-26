const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please Enter Your Name"],
        unique: true,
    },
    password : {
        type : String,
        required: [true, "Please Enter Your Password"],
        minLength: [6, "Password Should be greater than 6 characters"],
    }
},{
    timestamps: true
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;