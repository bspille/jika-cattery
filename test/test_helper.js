// clears the data collection each time

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

before((done)=>{
    mongoose.connect("mongodb://localhost/jika_cattery", { useMongoClient: true })
        .then( () => {
            console.log("Mongoose connection successful.");
            done()
        })
        .catch((error)=>{
            console.log("Mongoose Error: ", error);
        })
});

before((done)=>{
    const {cats, images, owners} = mongoose.connection.collections;
    Promise.all([cats.drop(), images.drop(), owners.drop() ])
        .then(() => done())
});