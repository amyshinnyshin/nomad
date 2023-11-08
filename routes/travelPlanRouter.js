const express = require("express");
const router = express.Router();
const TravelPlans = require("../models/travelPlansModel");
const { getAllTravelPlans, getNewTravelPlanForm, getOneTravelPlan, updateTravelPlan, deleteTravelPlan, getEventsForm, getTravelPlansById, createTravelPlanDetails } = require("../controllers/travelPlansController");


router.get("/", getAllTravelPlans);


//GET new travel plan form ✅
router.get("/new", getNewTravelPlanForm);

// POST a new travel plan ✅ -- need to figure out how to post, find and get 
// router.post("/", createTravelPlan, getAllTravelPlans);

router.post("/:id", createTravelPlanDetails, getEventsForm)


//GET new events form 
// router.get("/new/", createTravelPlanDetails, getEventsForm)


//GET one by id 
router.get("/:id", getOneTravelPlan);


//PATCH by id
router.patch("/:id", updateTravelPlan);


// DELETE by id
router.delete('/:id', deleteTravelPlan);



module.exports = router;