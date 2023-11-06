const express = require("express");
const router = express.Router();
const TravelPlans = require("../models/travelPlans");



//GET all 
router.get("/", async (req, res) => {
    try {
        const allTravelPlans = await TravelPlans.find(); // Use the TravelPlan model to find all plans
        res.status(200).json(allTravelPlans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});




// POST a new travel plan
router.post("/", async (req, res) => {
    const travelPlan = new TravelPlans({
        planName: req.body.planName, 
        location: req.body.location,
        planDescription: req.body.planDescription, 
        events: [],
    });

    try {
        const newTravelPlan = await travelPlan.save();
        res.status(201).json(newTravelPlan);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});




//GET one by id 
router.get("/:id", getTravelPlan, (req, res) => {
    res.send(res.plan)
});




//PATCH by id
router.patch("/:id", getTravelPlan, async (req, res) => {
    if (req.body.planName != null) {
        res.plan.planName = req.body.planName;
    }
    if (req.body.location != null) {
        res.plan.location = req.body.location;
    }
    if (req.body.planDescription != null) {
        res.plan.planDescription = req.body.planDescription;
    }
    try {
        const updatedTravelPlan = await res.plan.save()
        res.json(updatedTravelPlan);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});



// DELETE by id
router.delete('/:id', getTravelPlan, async (req, res) => {
    try {
        await res.plan.deleteOne();
      res.json({ message: 'Deleted travel plan' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })

async function getTravelPlan(req, res, next) {
    let plan;
    try {
      plan = await TravelPlans.findById(req.params.id)
      if (plan == null) {
        return res.status(404).json({ message: 'Cannot find travel plan' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.plan = plan;
    next();
}



module.exports = router;