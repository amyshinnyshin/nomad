const express = require("express");
const { getEmptyStateHomepage } = require("../controllers/homepageControllerjs");
const router = express.Router();
// const TravelPlans = require("../models/travelPlansModel");


router.get('/', getEmptyStateHomepage );




module.exports = router;