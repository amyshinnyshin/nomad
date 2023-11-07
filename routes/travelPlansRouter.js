const express = require("express");
const router = express.Router();
const TravelPlans = require("../models/travelPlansModel");
const { getNewTravelPlanForm, createTravelPlan, getOneTravelPlan, updateTravelPlan, deleteTravelPlan, getTravelPlansById, getEventsForm } = require("../controllers/travelPlansController");


//GET all 
// router.get("/", getAllTravelPlans);


//GET new travel plan form ✅
router.get("/new", getNewTravelPlanForm);

// POST a new travel plan ✅ -- need to figure out how to post, find and get 
router.post("/", createTravelPlan);

//GET new events form 
router.get("/new/events", getEventsForm)


//GET one by id 
router.get("/:id", getTravelPlansById, getOneTravelPlan);


//PATCH by id
router.patch("/:id", getTravelPlansById, updateTravelPlan);


// DELETE by id
router.delete('/:id', getTravelPlansById, deleteTravelPlan);



module.exports = router;