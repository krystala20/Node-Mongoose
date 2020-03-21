//In this file, we define the mongoose schema & model for all docs in DB campsites' collection
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creation of campsite Schema
const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    //when doc is created it will be given a Created at and Updated at property
    timestamps: true
});

//Using campsiteSchema for Campsite collection
const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;