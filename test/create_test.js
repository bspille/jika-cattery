// test create queen tom and kittens
const mongoose = require("mongoose");
const assert = require('assert');
const Cat = require("../models/cats");
const Image = require("../models/images");
const Owner = require("../models/owners");


describe("Create New cat", () =>{
    let sue;

    beforeEach((done)=> {
         sue = new Cat({
            name: "sue"
        });
        sue.save()
            .then(()=> done())

    });

    it("Saves a cat", (done) =>{
        assert(!sue.isNew);
        done();
    })

});

describe("Create New image", () =>{
    let myImage;

    beforeEach((done)=> {
        myImage = new Image({
            imgUrl: "http://lorempixel.com/400/400/cats"
        });
        myImage.save()
            .then(()=> done())

    });

    // it block
    it("Saves a image", (done) =>{
        assert(!myImage.isNew);
        done();
    })

});

describe("Create New Owner", ()=>{
    let jikaCat;

    beforeEach((done)=>{
        jikaCat = new Owner({
            admin: true,
            imageUrl: "http://lorempixel.com/400/400/person",
            name: "Jika Cats",
            pin: "1234"
        });
        jikaCat.save()
            .then(()=> done())

    });

    it("saves a owner", (done)=>{
      assert(!jikaCat.isNew);
      done();
    })
});