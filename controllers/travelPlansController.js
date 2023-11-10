const express = require("express");
const router = express.Router();
const TravelPlans = require("../models/travelPlansModel");


//GET all travel plans function WORKS! ✅
const getAllTravelPlans = async (req, res) => {
    try {
        const allTravelPlans = await TravelPlans.find(); 
        res.render("homepage-w-plans.ejs", { travelPlans: allTravelPlans })
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//GET new travel plans form -- WORKS! ✅
const getNewTravelPlanForm = async (req, res) => {
    try {
        res.render("newTravelPlanForm.ejs")
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


//POST new travel plans -- WORKS! ✅
const createTravelPlanDetails = async (req, res, next) => {
    try {
        const { planName, location, planDescription } = req.body;

        const travelPlan = new TravelPlans({
            planName,
            location,
            planDescription,
            events: [],
        });

        await travelPlan.save();


        res.redirect(`/myplans/${travelPlan._id}/events`);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}





//EVENTS ––––––––––––––––––––––––––– 🗓
//GET new events form... WORKS! ✅
const getEventsForm = async (req, res) => {
    try {
        const travelPlan = await TravelPlans.findById(req.params.id);

        if (!travelPlan) {
            return res.status(404).json({ message: 'Travel plan not found' });
        }

        // Render the events page, passing the travelPlan object
        res.render('newEventScheduleForm.ejs', { travelPlan: travelPlan });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


//PATCH new travel plan with EVENTS  - WORKS! ✅
const addEventsInTravelPlan = async (req, res, next) => {
    try {
      const travelPlan = await TravelPlans.findById(req.params.id);
  
      if (!travelPlan) {
        return res.status(404).json({ message: 'Travel plan not found' });
      }
  
      const newEvent = req.body;

      travelPlan.events.push(newEvent);
  
      await travelPlan.save();
  
      res.redirect('/myplans');
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  

//––––––––––––––––––––––––––––––––––––––––––––––---– 🗓







//GET one by ID -- WORKS! ✅
const getOneTravelPlan = async (req, res) => {
    const travelPlan = await TravelPlans.findById(req.params.id);
    res.render("createdTravelPlan.ejs", { travelPlan: travelPlan })
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



// DELETE by ID, deleting a plan... WORKS! ✅
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



  

// –––––––––––––––––––––––––GET By ID
// const getTravelPlansById = async function getTravelPlan(req, res, next) {
//     let plan;
//     try {
//       plan = await TravelPlans.findById(req.params.id)
//       if (plan == null) {
//         return res.status(404).json({ message: 'Cannot find travel plan' })
//       }
//     } catch (err) {
//       return res.status(500).json({ message: err.message })
//     }
  
//     res.plan = plan;
//     next();
// }



module.exports = { getAllTravelPlans, getNewTravelPlanForm, getOneTravelPlan, updateTravelPlan, deleteTravelPlan, getEventsForm, createTravelPlanDetails, addEventsInTravelPlan}
