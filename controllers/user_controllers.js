const Doctor = require('../models/doctor');
const Patient = require('../models/patient');
const jwt = require('jsonwebtoken');

// Render the register for Doctor
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


// Render the Login for Doctor
module.exports.login = async (req, res, next) =>{
    try {
        let user = await Doctor.findOne(req.body);

        if (!user || user.password != req.body.password) {
            return res.status(422).json(
                {
                    message: "Invalid UserName or Password"
                }
            )
        }

        return res.status(200).json(
            {
                message: "Sign in successful. Here is your token, please keep it safe",
                data:
                {
                    token: jwt.sign(user.toJSON(),'Alert1234',{expiresIn:'1000000'})
                }
            }
        )


    } 
    catch(err){
        res.status(500).json({
            success: false,
            message: `Something Went Wrong ${err}`
        });
    }
}


// Render the register for patient
module.exports.registerPatient = async (req, res, next) =>{
    try{
        req.body.doctor = "64c096698027d05547019b2e";
        const patient = await Patient.create(req.body);

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

// Render create report for patient
module.exports.createReport = async (req, res, next) =>{
    try{
        const patient = await Patient.findById(req.params.id);

         req.body.date = Date.now();

         patient.reports.push(req.body);

         patient.save();

         res.status(200).json({
            success: true,
            message: "report submitted successfully"
         });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: `Could not create a report, internal server error ${err }`
        });
    }
}


// Render all reports for patient
module.exports.all_reports = async(req, res, next) =>{
    try{
        const patient =  await Patient.findById(req.params.id);
        res.status(200).json({
            success: true,
            reports: patient.reports
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "could not able to fetch the patient reports"
        });
    }
}


//Render Fetch Reports With Particular patient Status
module.exports.AllReports = async (req, res, next) =>{
    try{
        const patient = await Patient.find({reports: {$elenMatch: { status: req.params.status } },
        });
        res.status(200).json({
            success: true,
            data: patient
        })
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: `could not able to fetch the reports`
        });
    }

}
