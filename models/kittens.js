// TODO: check that the relations setup correctly

// a kitten has a image, name, owner, tom and queen

const mongoose = require("mongoose");
const Queen = require("./queens");
const Tom = require("./toms");
const Image = require("./images");

const Schema = mongoose.Schema;

const kittenSchema = new Schema({
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