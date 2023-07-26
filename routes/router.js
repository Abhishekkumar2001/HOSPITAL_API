const express = require('express');
const { registerDoctor, registerPatient } = require("../controllers/user_controllers");

const router = express.Router(); 

router.post('/doctors/register', registerDoctor);

router.post('/patients/register', registerPatient);

module.exports = router;