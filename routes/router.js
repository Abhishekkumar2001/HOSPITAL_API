// Importing the express
const express = require("express");


const {
  registerDoctor,
  registerPatient,
  createReport,
  all_reports,
  AllReports,
  login,
} = require("../controllers/user_controllers");
const passport = require("passport");

// Created the router
const router = express.Router();

// Created router for doctor register
router.post("/doctors/register", registerDoctor);

// Created router for doctor login
router.post("/doctors/login", login);

// Created router for patient register
router.post(
  "/patients/register",
  passport.authenticate("jwt", { session: false }),
  registerPatient
);

// Created router for patient report
router.post(
  "/patients/:id/create_report",
  passport.authenticate("jwt", { session: false }),
  createReport
);

// created router for patient all report
router.get("/patients/:id/all_reports", all_reports);

// created router for particular patient status
router.get("/reports/:status", AllReports);

module.exports = router;
