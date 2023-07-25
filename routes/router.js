const express = require('express');
const { test } = require("../controllers/user_controllers");

const router = express.Router(); 

router.get("/", test);

module.exports = router;