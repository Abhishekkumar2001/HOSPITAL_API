const express = require('express');
const { registerDoctor } = require("../controllers/user_controllers");

const router = express.Router(); 

router.post('/doctors/register', registerDoctor);

module.exports = router;