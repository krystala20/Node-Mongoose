
const mongoose = require('mongoose');
const Campsite = require('./models/campsite');

const url = 'mongodb://localhost:27017/nucampsite';
const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//mongoose.connect() method returns a promise
connect.then(() => {

    console.log('Connected correctly to server');

//Create instance of new document with model named "Campsite"
 //.create() auto saves the object that is created
 Campsite.create ({ 
        name: 'React Lake Campground',
        description: 'test'
    })
    .then(campsite => {
        console.log(campsite);
//Use find method to look for all docs instantiate from the Campsite model. Return found docs in an array of objects
        return Campsite.find();
    })
    .then(campsites => {
        console.log(campsites);
//Delete all docs from Campsite model
        return Campsite.deleteMany();
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
        mongoose.connection.close();
    });
});