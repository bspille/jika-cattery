// TODO: add validation to the models
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Cat = require("./cats");

const ownerSchema = new Schema({
    admin: {
        type: Boolean,
        required: true,
        default: false
    },
    cats:[{
        type: Schema.Types.ObjectId,
        ref: ["Cat"]
    }],
    imageUrl: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: [ true, "name is required"]
    },
    pin:{
        type: String,
        required: false
    },
});

const Owner = mongoose.model("Owner", ownerSchema);
module.exports = Owner;