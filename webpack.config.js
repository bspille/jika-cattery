const Path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');


const VENDOR_LIBS = [
    "axios",
    "express",
    "body-parser",
    "lodash",
    "react",
    "react-dom",
    "react-router-dom",
    "react-redux",
    "redux",
];

// require axios is not defined
// this reaches into the node modules and finds the bins to apply as externals
// const nodeModules = {};
// const nodeModules = fs.readdirSync('./node_modules'); // can't find the path to return a array of modules
//     .filter(function(x) {
//         return ['.bin'].indexOf(x) === -1;
//     })
//     .forEach(function(mod) {
//         nodeModules[mod] = 'commonjs ' + mod;
//     });

module.exports = {
    entry: {
        bundle: "./src/index.js",
        vendor: VENDOR_LIBS
    },
    output: {
        path: Path.resolve(__dirname, "build"),
        publicPath: "/",
        filename: "[name].[chunkhash].js"
    },
    module: {
        rules: [
            {
                use: "babel-loader",
                test: /\.js?$/,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
                })
            }
           
        ] 
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor", "manifest"]
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html"
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        })
    ],
    target: "web",

    // apply externals here to remove errors with out creating warnings
    externals: {
        express: "express",
    },
    devtool: "eval-source-map"
};
