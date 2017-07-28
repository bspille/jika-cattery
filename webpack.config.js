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
                use: ExtractTextPlugin.extract({
                    use: "css-loader"
                }),
                test: /\.css$/
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
    node: {
        fs: "empty",
        net: "empty"
    },
    devtool: "eval-source-map"
};
