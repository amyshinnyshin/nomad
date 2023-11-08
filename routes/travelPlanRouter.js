const express = require("express");
const router = express.Router();
const TravelPlans = require("../models/travelPlansModel");
const { getAllTravelPlans, getNewTravelPlanForm, getOneTravelPlan, updateTravelPlan, deleteTravelPlan, getEventsForm, createTravelPlanDetails, addEventsInTravelPlan } = require("../controllers/travelPlansController");

//GET all travel plan form -- WORKS! ✅
router.get("/", getAllTravelPlans);


//GET new travel plan form -- WORKS! ✅
router.get("/new", getNewTravelPlanForm);


//------------------------POST Created new travel plans and GET new event form with the newly created plan_id
// POST new travel plan details -- WORKS! ✅
router.post("/new", createTravelPlanDetails);

// GET new events form -- WORKS! ✅
router.get("/:id/events", getEventsForm);
//------------------------------------------------

// PATCH new events form -- WORKS! ✅
router.patch("/:id", addEventsInTravelPlan);






//GET one by id -- WORKS! ✅
router.get("/:id", getOneTravelPlan);


//PATCH by id
router.patch("/:id/", updateTravelPlan);


// DELETE by id -- WORKS! ✅
router.delete('/:id', deleteTravelPlan);



module.exports = router;