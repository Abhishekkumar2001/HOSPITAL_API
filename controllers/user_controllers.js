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
        const patient = await Patient();
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: `Could not create a patient, internal server error`
        });
    }
}