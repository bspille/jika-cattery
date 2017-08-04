// a Queen has many kittens

const mongoose = require("mongoose");
const Kitten = require("./kittens");

const Schema = mongoose.Schema;

const queenSchema = new Schema({
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

const Queen = mongoose.model("Queen", queenSchema);

module.exports = Queen;