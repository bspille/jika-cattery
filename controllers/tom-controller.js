const Tom = require("../models/toms");
const mongoose = require("mongoose");

module.exports = {

    // find all toms, populate the images field then respond with the resulting array
    fetchToms( req, res, next){
        Tom.find({})
            .populate("images")
            .then((toms)=>{
                res.json(toms);
            })
            // catch any errors and call the next middleware
            .catch(next);
    }
};