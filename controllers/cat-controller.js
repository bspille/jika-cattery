const Cat = require("../models/cats");


module.exports = {

    addNewCat(req, res, next){
        console.log(req.body);
        let newCat = req.body;


    },

    // find all kittens, populate the images field then respond with the resulting array
    fetchKittens( req, res, next){
        Cat.find({ kittens:  {$size: 0 }})
            .populate("images")
            .then((kittens)=>{
                res.json(kittens);
            })
            // catch any errors and call the next middleware
            .catch(next);
    },

    fetchQueens(req, res, next) {
        Cat.find({gender: "female", Kittens: {$not: {$size: 0}}})
            .populate("images")
            .then((queens) => {
                res.json(queens);
            })
            .catch(next);
    },

    fetchToms(req, res, next) {
        Cat.find({gender: "male", Kittens: {$not: {$size: 0}}})
            .populate("images")
            .then((toms) => {
                res.json(toms);
            })
            .catch(next);
    }
};