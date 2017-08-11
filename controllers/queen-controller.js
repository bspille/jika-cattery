const Queen = require("../models/queens");
const mongoose = require("mongoose");

module.exports = {

    // find all queens, populate the images field then respond with the resulting array
    fetchQueens( req, res, next){
        Queen.find({})
            .populate("images")
            .then((queens)=>{
            console.log(queens);
                res.json(queens);
            })
            // catch any errors and call the next middleware
            .catch(next);
    }
};