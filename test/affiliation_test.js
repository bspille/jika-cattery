const mongoose = require("mongoose");
const assert = require('assert');
const Queen = require('../models/queens.js');
const Tom = require("../models/toms.js");
const Kitten = require("../models/kittens.js");

describe("affiliations", () => {
    let jill;
    let omally;
    let til;
    let burly;
    before((done)=>{
        jill = new Queen({
            img: "http://lorempixel.com/400/400/cats",
            name: "jill",
        });
        omally = new Tom({
            img: "http://lorempixel.com/400/400/cats",
            name: "omally",
        });
        til = new Kitten({
            img: "http://lorempixel.com/400/400/cats",
            name: "til",
        });
        burly = new Kitten({
            img: "http://lorempixel.com/400/400/cats",
            name: "burly",
        });
        jill.kittens.push(til);
        jill.kittens.push(burly);
        omally.kittens.push(til);
        omally.kittens.push(burly);
        til.set({tom: omally, queen: jill });
        burly.set({tom: omally, queen: jill });
        Promise.all([jill.save(), omally.save(), til.save(), burly.save() ])
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
    it("queens have many kittens", (done)=>{
        assert(jill.kittens.length === 2);
        done();
    });
    it("toms have many kittens", (done)=>{
        assert(omally.kittens.length === 2);
        done();
    });
});