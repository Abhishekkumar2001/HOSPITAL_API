const express = require('express');
const { registerDoctor, registerPatient, createReport, all_reports, AllReports } = require("../controllers/user_controllers");

const router = express.Router(); 

router.post('/doctors/register', registerDoctor);

router.post('/patients/register', registerPatient);

router.post('/patients/:id/create_report', createReport);

router.get('/patients/:id/all_reports', all_reports);

router.get('/reports/:status', AllReports);

module.exports = router;