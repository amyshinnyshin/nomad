const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventName: {
        type: String, 
        required: true
    },
    eventDate: {
        type: Date, 
        default: Date.now()
    },
    startTime: {
        type: String, 
        default: "00.00"
    },
    endTime: {
        type: String, 
        default: "00.00"
    },
    eventDescription: {
        type:String
    }
});


const travelPlanSchema = new mongoose.Schema({
    planName: { 
        type: String, 
        required: true 
    },
    location: { 
        type: String, 
        required: true 
    },
    planDescription: { 
        type: String, 
        required: true 
    },
    events: [eventSchema]
});


//in the mongoose model>> the first the name of the model in our DB, then schema, collection name
module.exports = mongoose.model("Travel Plans", travelPlanSchema, "plans")