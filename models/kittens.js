// TODO: check that the relations setup correctly

// a kitten has a image, name, owner, tom and queen

const mongoose = require("mongoose");
const Queen = require("./queens");
const Tom = require("./toms");

const Schema = mongoose.Schema;

const kittenSchema = new Schema({
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
    queen: {
        type: Schema.Types.ObjectId,
        ref: "Queen"
    },
    tom: {
        type: Schema.Types.ObjectId,
        ref: "Tom"
    }
});

const Kitten = mongoose.model("Kitten", kittenSchema);
module.exports = Kitten;