// a tom has many kittens

const mongoose = require("mongoose");
const Kitten = require("./kittens");
const Image = require("./images");

const Schema = mongoose.Schema;

const tomSchema = new Schema({
    images: [{
        type: Schema.Types.ObjectId,
        ref: "Image"
    }],
    name: {
        type: String,
        required: [ true, "Name is required!"],
    },
    birthday:{
        type: Date,
        required: false,
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