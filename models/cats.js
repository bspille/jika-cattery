// TODO: check that the relations setup correctly

// a kitten has a image, name, owner, tom and queen

const mongoose = require("mongoose");
const Image = require("./images");
const Owner = require("./owners");

const Schema = mongoose.Schema;

const catSchema = new Schema({
    birthday:{
        type: Date,
        required: false,
    },
    fixed: {
        type: Boolean,
        required: true,
        default: false
    },
    gender: {
        type: String,
        required: false
    },
    images: [{
        type: Schema.Types.ObjectId,
        ref: "Image"
    }],
    kittens: [{
        type: Schema.Types.ObjectId,
        ref: "Cat"
    }],
    name: {
        type: String,
        required: [ true, "Name is required!"],
    },

    owner:{
        type: Schema.Types.ObjectId,
        ref: "Owner"
    },
    queen: {
        type: Schema.Types.ObjectId,
        ref: "Cat"
    },
    tom: {
        type: Schema.Types.ObjectId,
        ref: "Cat"
    },

});

const Cat = mongoose.model("Cat", catSchema);
module.exports = Cat;