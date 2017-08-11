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
    const { kittens, toms, queens, images } = mongoose.connection.collections;
    Promise.all([ kittens.drop(), toms.drop(), queens.drop(), images.drop() ])
       .then(()=> done())
});