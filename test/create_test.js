// test create queen tom and kittens
const mongoose = require("mongoose");
const assert = require('assert');
const Queen = require('../models/queens.js');
const Tom = require("../models/toms.js");
const Kitten = require("../models/kittens.js");
// describe block

describe("Create New Queen", () => {
    let sally;

    beforeEach((done)=>{
        sally = new Queen({
            img: "http://lorempixel.com/400/400/cats",
            name: "sally"
        });
        sally.save()
            .then(()=> done())
            .catch((err)=>{
                console.log(`queen save error ${err}`);
            })
            
            
    });
  
    // it block
    it("Saves a Queen", (done) =>{
       assert(!sally.isNew); 
       done();
    })

});

describe("Create New Tom", () =>{
    let billy;
    
    beforeEach((done)=>{
        billy = new Tom({
            img: "http://lorempixel.com/400/400/cats",
            name: "billy"
        });
        billy.save()
            .then(()=> done())
            .catch((err)=>{
                console.log(`tom save error ${err}`);
            })
    });
    
    // it block
    it("Saves a Tom", (done) =>{
       assert(!billy.isNew); 
       done();
    })

});

describe("Create New Kitten", () =>{
    let sue;

    beforeEach((done)=> {
         sue = new Kitten({
            img: "http://lorempixel.com/400/400/cats",
            name: "sue"
        });
        sue.save()
            .then(()=> done())
            .catch((err)=>{
                console.log(`kitten save error ${err}`);
            })
    });
 
    // it block
    it("Saves a Kitten", (done) =>{
        assert(!sue.isNew); 
        done();
    })

});
