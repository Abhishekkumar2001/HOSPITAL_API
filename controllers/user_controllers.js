const Doctor = require('../models/doctor');
const Patient = require('../models/patient');


module.exports.registerDoctor = async (req, res, next) => {
    try{
        const doctor = await Doctor.create(req.body);

        res.status(200).json({
            success: true,
            message: "doctor created successfully",
        });
    } catch(err){
        res.status(500).json({
            success: false,
            message: `Could not create  a doctor, internal server error ${err}`
        });

    }
};

module.exports.registerPatient = async (req, res, next) =>{
    try{
        req.body.doctor = "64c096698027d05547019b2e";
        const patient = await Patient(req.body);

        res.status(200).json({
            success: true,
            message: "Successfully created a patient"
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: `Could not create a patient, internal server error`
        });
    }
}