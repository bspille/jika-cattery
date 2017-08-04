// a tom has many kittens

const mongoose = require("mongoose");
const Kitten = require("./kittens");

const Schema = mongoose.Schema;

const tomSchema = new Schema({
    img: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: [ true, "Name is required!"],
    },
    owner:{
        type: String,
        required: [ true, "Owner is required!"],
        default: "Jika Cattery"
    },
    kittens: [{
        type: Schema.Types.ObjectId,
        ref: "Kitten"
    }],
});

const Tom = mongoose.model("Tom", tomSchema);
module.exports = Tom;