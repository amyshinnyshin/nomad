const express = require("express");
const router = express.Router();
const TravelPlans = require("../models/travelPlansModel");
const { getNewTravelPlanForm, createTravelPlan, getOneTravelPlan, updateTravelPlan, deleteTravelPlan, getTravelPlansById } = require("../controllers/travelPlansController");


//GET all 
// router.get("/", getAllTravelPlans);


//GET new travel plan form
router.get("/", getNewTravelPlanForm);

// POST a new travel plan
router.post("/", createTravelPlan);


//GET one by id 
router.get("/:id", getTravelPlansById, getOneTravelPlan);


//PATCH by id
router.patch("/:id", getTravelPlansById, updateTravelPlan);


// DELETE by id
router.delete('/:id', getTravelPlansById, deleteTravelPlan);



module.exports = router;