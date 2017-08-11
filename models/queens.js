// a Queen has many kittens

const mongoose = require("mongoose");
const Kitten = require("./kittens");
const Image = require("./images");

const Schema = mongoose.Schema;

const queenSchema = new Schema({
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

const Queen = mongoose.model("Queen", queenSchema);

module.exports = Queen;