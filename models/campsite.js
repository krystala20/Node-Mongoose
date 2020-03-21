//In this file, we define the mongoose schema & model for all docs in DB campsites' collection
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creation of comment Schema
const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5, 
        required: true
    }, 
    text: {
        type: String, 
        required: true
    },
    author: {
        type: String, 
        required: true
    }
},{
    timestamps: true
});

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
    },
//This causes every campsite document to be able to contain multiple comment documents stored in an array
    comments: [commentSchema]
}, {
    //when doc is created it will be given a Created at and Updated at property
    timestamps: true
});

//Using campsiteSchema for Campsite collection
const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;