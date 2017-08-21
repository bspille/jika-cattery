const mongoose = require("mongoose");
const assert = require('assert');
const Cat = require("../models/cats");
const Image = require("../models/images");
const Owner = require("../models/owners");

describe("affiliations", () => {

    let catOwner;
    let jill;
    let omally;
    let til;
    let burly;
    let Image_1;
    let Image_2;
    let Image_3;
    let Image_4;
    let Image_5;


    before((done)=>{

        catOwner = new Owner({
            admin: true,
            name: "Jika",
            pin: "1234"
        });
        jill = new Cat({
            name: "jill",
        });
        omally = new Cat({
            name: "omally",
        });
        til = new Cat({
            name: "til",
        });
        burly = new Cat({
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
            imageUrl: "http://lorempixel.com/400/400/person"
        });

        catOwner.cats.push(jill);
        catOwner.cats.push(omally);
        catOwner.cats.push(til);
        catOwner.cats.push(burly);
        catOwner.set({ imageUrl: Image_5 });
        jill.set({ owner: catOwner });
        jill.kittens.push(til);
        jill.kittens.push(burly);
        jill.images.push(Image_1);
        jill.images.push(Image_2);
        til.set({tom: omally, queen: jill, owner: catOwner });
        til.images.push(Image_3);
        til.images.push(Image_4);
        Promise.all([ catOwner.save(), jill.save(), omally.save(), til.save(), burly.save(), Image_1.save(), Image_2.save(), Image_3.save(), Image_4.save(), Image_5.save() ])
            .then(()=> done())
    });

    it("Cats have a owner", (done)=>{
        assert(til.owner.name === "Jika");
        done();
    });
    it("Cats have a queen", (done)=>{
        assert(til.queen.name === "jill");
        done();
    });

    it("Cats have a tom", (done)=>{
        assert(til.tom.name === "omally");
        done();
    });
    it("Cats have multiple images", (done)=>{
        assert(til.images.length === 2);
        done();
    });
    it("Cats have many kittens", (done)=>{
        assert(jill.kittens.length === 2);
        done();
    });
    it("Owners have many cats", (done)=>{
        assert(catOwner.cats.length === 4);
        done();
    });

});