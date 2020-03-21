
const mongoose = require('mongoose');
const Campsite = require('./models/campsite');

const url = 'mongodb://localhost:27017/nucampsite';
const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//mongoose.connect() method returns a promise
connect.then(() => {

    console.log('Connected correctly to server');

//Create instance of new document with model named "Campsite" -> create() auto saves the object that is created
 Campsite.create ({ 
        name: 'React Lake Campground',
        description: 'test'
    })
    .then(campsite => {
        console.log(campsite);

//Update campsite doc
        return Campsite.findByIdAndUpdate(campsite._id,
            {
                $set: { description: 'Updated Test Document'}
            }, 
            {
//Return updated doc instead of original doc
                new: true
            });
    })
    .then(campsite => {
        console.log(campsite);
        
        campsite.comments.push({
            rating: 5, 
            text: "What a maginficent view!",
            author: "Tinus Lorvaldes"
        });

        return campsite.save();
    })

    .then(campsite => {
        console.log(campsite);
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