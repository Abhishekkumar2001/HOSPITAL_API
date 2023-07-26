// Importing the mongoose
const mongoose = require("mongoose");


// Create Patient Schema
const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide Your Patient Name"],
    unique: true
  },
  reports: [
    {
      status: {
        type: String,
        required: true,
        enum: [
          "Negative",
          "Travelled-Quarantine",
          "Symptoms-Quarantine",
          "Positive-Admit",
        ],
      },
      date:{
        type: Date,
        required: true
      }
    },
  ],
  doctor:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true
  }
},{
  timestamps: true
});

const Patient = new mongoose.model('Patient', patientSchema);

module.exports = Patient;
