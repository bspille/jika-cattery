
const express = require('express');
const app = express();
const Path = require('path');
const PORT = process.env.PORT || 3000;

// use routes here

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

app.listen(PORT, () => console.log(`listening on port ${PORT}`));