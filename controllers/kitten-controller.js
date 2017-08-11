const Kitten = require("../models/kittens");
const mongoose = require("mongoose");

module.exports = {

    // find all kittens, populate the images field then respond with the resulting array
    fetchKittens( req, res, next){
        Kitten.find({})
            .populate("images")
            .then((kittens)=>{
                res.json(kittens);
            })
            // catch any errors and call the next middleware
            .catch(next);
    }
};