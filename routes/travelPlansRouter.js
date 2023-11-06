const express = require("express");
const router = express.Router();

//GET all 
router.get("/", (req, res) => {
    res.send('GET ALL')
});


//POST new by id -- creating new 
router.post("/", (req, res) => {
    res.send('POST NEW')
});


//GET one by id 
router.get("/:id", (req, res) => {
    res.send('GET BY ID')
});


//PATCH by id
router.patch("/:id/update", (req, res) => {
    res.send('UPDATE BY ID')
});


//DELETE by id
router.delete("/:id/delete", (req, res) => {
    res.send('DELETE BY ID')
});

// module.exports = router;