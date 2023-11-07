const express = require("express");
const router = express.Router();
const TravelPlans = require("../models/travelPlansModel");


//GET all travel plans function
const getAllTravelPlans = async (req, res) => {
    try {
        const allTravelPlans = await TravelPlans.find(); // Use the TravelPlan model to find all plans
        res.render("homepage-w-plans.ejs", { travelPlans: allTravelPlans })
        
        // res.status(200).json(allTravelPlans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//GET new travel plans form -- WORKS! ✅
const getNewTravelPlanForm = async (req, res) => {
    try {
        res.render("travelPlanForm.ejs")
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


// //POST new travel plan by creating plan ✅
// const createTravelPlan = async (req, res) => {
//     const travelPlan = new TravelPlans({
//         planName: req.body.planName, 
//         location: req.body.location,
//         planDescription: req.body.planDescription, 
//         events: [],
//     });

//     try {
//         const newTravelPlan = await travelPlan.save();
//         res.status(201).json(newTravelPlan);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

//POST new travel plan >> render homepage-w-plan.ejs ✅
const createTravelPlan = async (req, res, next) => {
    const travelPlan = new TravelPlans({
        planName: req.body.planName, 
        location: req.body.location,
        planDescription: req.body.planDescription, 
        events: [],
    });
    try {
        await travelPlan.save();
        const allTravelPlans = await TravelPlans.find(); // Use the TravelPlan model to find all plans
        res.render("homepage-w-plans.ejs", { travelPlans: allTravelPlans })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    next()
};





//GET new events form... ––––––––––––––––––––––––––– 🗓
const getEventsForm = async (req, res) => {
    try {
        res.render("eventScheduleForm.ejs")
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


//––––––––––––––––––––––––––––––––––––––––––––––---– 🗓




//GET one by ID
const getOneTravelPlan = (req, res) => {
    res.send(res.plan)
}



//PATCH by ID, Updating Plan
const updateTravelPlan =  async (req, res) => {
    if (req.body.planName != null) {
        res.plan.planName = req.body.planName;
    }
    if (req.body.location != null) {
        res.plan.location = req.body.location;
    }
    if (req.body.planDescription != null) {
        res.plan.planDescription = req.body.planDescription;
    }
    if (req.body.events != null) {
        res.plan.events = req.body.events;
    }
    try {
        const updatedTravelPlan = await res.plan.save()
        res.json(updatedTravelPlan);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}



//DELETE by ID, deleting a plan...
// const deleteTravelPlan = async (req, res) => {
//     try {
//         const result = await res.plan.deleteOne();
//         console.log('Delete result:', result);
//         res.json({ message: 'Deleted travel plan' });
//     } catch (err) {
//         console.error('Delete error:', err);
//         res.status(500).json({ message: err.message });
//     }
// }


const deleteTravelPlan = async (req, res) => {
    try {
        const deletedPlan = await TravelPlans.findByIdAndDelete(req.params.id);
        if (deletedPlan) {
            res.redirect("/myplans");
        } else {
            return res.status(404).json({ message: 'Cannot find travel plan' });
        }
    } catch (err) {
        console.error('Delete error:', err);
        res.status(500).json({ message: err.message });
    }
};


  

//–––––––––––––––––––––––––GET By ID
const getTravelPlansById = async function getTravelPlan(req, res, next) {
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



module.exports = { getAllTravelPlans, getNewTravelPlanForm, createTravelPlan, getOneTravelPlan, updateTravelPlan, deleteTravelPlan, getTravelPlansById, getEventsForm }
