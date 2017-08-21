
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    imageUrl: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: false
    },
    author: {
        type: String,
        default: "unknown"
    },
    title: {
        type: String,
        required: false
    }

});

const Image = mongoose.model("Image", imageSchema);
module.exports = Image;