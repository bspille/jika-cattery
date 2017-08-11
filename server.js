
const express = require('express');
const app = express();
const Path = require('path');
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3000;

// use ES6 promises with mongoose
mongoose.Promise = global.Promise;
// localhost connection uncomment for localhost
if(process.env.NODE_ENV !== 'test'){
mongoose.connect("mongodb://localhost/jika_cattery", { useMongoClient: true });
}
mongoose.connection
  .on("error", (error) => {
    console.log("Mongoose Error: ", error);
  })
  .once("open", () => {
    console.log("Mongoose connection successful.");
    // require the seed IIFE to seed the data collections
    require("./seeds");
  });

// default routeer middleware
app.use('/', routes);

if(process.env.NODE_ENV !== 'production'){
    console.log(`uses dev environment`);
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config');
    app.use(webpackMiddleware(webpack(webpackConfig)));
}
else{
    app.use(express.static('build'));
    app.get('*', (req, res)=> {
        res.sendFile(Path.join(__dirname, 'build/index.html'));
    })
}

// follow up middleware set to handle errors
app.use((err, req, res, next)=>{
  res.status(422).json(`ERROR: ${ err.message }`)
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));