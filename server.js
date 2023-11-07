const express = require("express")
const app = express(); 
const { DATABASE_URL, PORT } = require("./config.js")
const methodOverride = require('method-override');

const mongoose = require("mongoose");



//--------------  Start Server Variable  ----------------//
const startServer = async () => {
    await mongoose.connect(DATABASE_URL);

    mongoose.connection.on('connected', () => {
        console.log('Connected  to' + DATABASE_URL);
    });

    app.listen(PORT, () =>
    console.log(`Server started on ${PORT}.`));
};


//--------------  Set Up Middleware  ----------------//
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//--------------  Routing ----------------//
const travelPlansRouter = require("./routes/travelPlanRouter.js");
const homepageRouter = require("./routes/homepageRouter.js");



app.use('/myplans', travelPlansRouter)
app.use('/', homepageRouter)



startServer();