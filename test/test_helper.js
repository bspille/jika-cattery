// clears the data collection each time

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

before((done)=>{
    mongoose.connect("mongodb://localhost/jika_cattery")
        .then( () => {
            console.log("Mongoose connection successful.");
            done()
        })
        .catch((error)=>{
            console.log("Mongoose Error: ", error);
        })
});

before((done)=>{
    const { kittens, toms, queens } = mongoose.connection.collections;
    Promise.all([ kittens.drop(), toms.drop(), queens.drop() ])
       .then(()=> done())
});