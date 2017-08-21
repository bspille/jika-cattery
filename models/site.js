const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const siteSchema = new Schema({
    name: {
       type: String,
       required: [true, "name is requried"]
    },
    welcomeMessage: {
        type: String,
        required: false,
        default: "welcome"
    }
});

const Site = mongoose.model("Site", siteSchema);
module.exports = Site;