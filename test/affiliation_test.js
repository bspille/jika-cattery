const mongoose = require("mongoose");
const assert = require('assert');
const Queen = require('../models/queens');
const Tom = require("../models/toms");
const Kitten = require("../models/kittens");
const Image = require("../models/images");

describe("affiliations", () => {
    let jill;
    let omally;
    let til;
    let burly;
    let Image_1;
    let Image_2;
    let Image_3;
    let Image_4;
    let Image_5;
    let Image_6;
    let Image_7;
    let Image_8;

    before((done)=>{
        jill = new Queen({
            name: "jill",
        });
        omally = new Tom({
            name: "omally",
        });
        til = new Kitten({
            name: "til",
        });
        burly = new Kitten({
            name: "burly",
        });
        Image_1 = new Image({
            imageUrl: "http://lorempixel.com/400/400/cat/1"
        });
        Image_2 = new Image({
            imageUrl: "http://lorempixel.com/400/400/cat/2"
        });
        Image_3 = new Image({
            imageUrl: "http://lorempixel.com/400/400/cat/3"
        });
        Image_4 = new Image({
            imageUrl: "http://lorempixel.com/400/400/cat/4"
        });
        Image_5 = new Image({
            imageUrl: "http://lorempixel.com/400/400/cat/5"
        });
        Image_6 = new Image({
            imageUrl: "http://lorempixel.com/400/400/cat/6"
        });
        Image_7 = new Image({
            imageUrl: "http://lorempixel.com/400/400/cat/7"
        });
        Image_8 = new Image({
            imageUrl: "http://lorempixel.com/400/400/cat/8"
        });
    // , Image_1.save(), Image_2.save(), Image_3.save(), Image_4.save(), Image_5.save(), Image_6.save(), Image_7.save(), Image_8.save()
        jill.kittens.push(til);
        jill.kittens.push(burly);
        jill.images.push(Image_1);
        jill.images.push(Image_2);
        omally.kittens.push(til);
        omally.kittens.push(burly);
        omally.images.push(Image_3);
        omally.images.push(Image_4);
        til.set({tom: omally, queen: jill });
        til.images.push(Image_5);
        til.images.push(Image_6);
        burly.set({tom: omally, queen: jill });
        burly.images.push(Image_7);
        burly.images.push(Image_8);
        Promise.all([jill.save(), omally.save(), til.save(), burly.save(), Image_1.save(), Image_2.save(), Image_3.save(), Image_4.save(), Image_5.save(), Image_6.save(), Image_7.save(), Image_8.save() ])
            .then(()=> done())
    });
    it("kittens have a queen", (done)=>{
        assert(til.queen.name === "jill");
        done();
    });

    it("kittens have a tom", (done)=>{
        assert(burly.tom.name === "omally");
        done();
    });
    it("Kittens have multiple images", (done)=>{
        assert(til.images.length === 2);
        done();
    });
    it("queens have many kittens", (done)=>{
        assert(jill.kittens.length === 2);
        done();
    });
    it("queens have multiple images", (done)=>{
        assert(jill.images.length === 2);
        done();
    });
    it("toms have many kittens", (done)=>{
        assert(omally.kittens.length === 2);
        done();
    });
    it("toms have multiple images", (done)=>{
        assert(omally.images.length === 2);
        done();
    });
});