
const express = require('express');
const app = express();
const Path = require('path');
const PORT = process.env.PORT || 3000;

// use ES6 promises with mongoose
mongoose.Promise = global.Promise;
// localhost connection uncomment for localhost
if(process.env.NODE_ENV !== 'test'){
mongoose.connect("mongodb://localhost/jika_cattery");
}
mongoose.connection
  .on("error", (error) => {
    console.log("Mongoose Error: ", error);
  })
  .once("open", () => {
    console.log("Mongoose connection successful.");
  });

// default routeer middleware
app.use('/', routes);

if(process.env.NODE_ENV !== 'production'){
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
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`));