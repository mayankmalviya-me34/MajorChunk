const mongoose = require("mongoose");

const BasicInfo = new mongoose.Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNo: {
        type: Number,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },
});

const Information = mongoose.model("BasicInfo", BasicInfo);
module.exports = Information;