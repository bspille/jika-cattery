const mongoose = require("mongoose");
const assert = require('assert');
const Queen = require('../models/queens');
const Tom = require("../models/toms");
const Kitten = require("../models/kittens");
const Image = require("../models/images");

describe("Updates fields after they are saved", ()=>{
    let jilly;
    let oma;
    let tilly;
    let billy;
    let Image_1;
    let Image_2;
    let Image_3;
    let Image_4;
    let Image_5;
    let Image_6;
    let Image_7;
    let Image_8;

    before((done)=>{
        jilly = new Queen({
            name: "jilly",
        });
        oma = new Tom({
            name: "oma",
        });
        tilly = new Kitten({
            name: "tilly",
        });
        billy = new Kitten({
            name: "billy",
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

        Promise.all([
            jilly.save(),
            oma.save(),
            tilly.save(),
            billy.save(),
            Image_1.save(),
            Image_2.save(),
            Image_3.save(),
        ])
            .then(()=> {
                Promise.all([
                    Queen.update({_id: jilly._id}, {$push: { kittens: tilly, images: Image_1}, $set: { birthday: new Date("2017-08-05"), owner: "joe"}}),
                    Tom.update({_id: oma._id}, {$push: { kittens: tilly, images: Image_2}, $set: { birthday: new Date("2017-08-05"), owner: "joe"}}),
                    Kitten.update({_id: tilly._id}, {$push: {images: Image_3._id}, $set: {birthday: new Date("2017-08-05"), owner: "joe", tom: oma, queen: jilly }}),
                    Image.update({_id: Image_1._id}, {$set: { author: "jimmy", date: new Date("2017-08-05"), title: "my new cat"}}),
                ])
                    .then(()=> done())
            })
    });
    it("Queens can find and save a new image", (done)=>{
        Queen.findOne({_id: jilly._id})
            .then((res)=>{

                if(toString(res._id) === toString(jilly._id) && res.images.length > 0){
                    assert(toString(res.images[0]) === toString(Image_1.imageUrl));
                    done()
                }
            });
    });
    it("Queens can find and save a new kitten", (done)=>{
        Queen.findOne({_id: jilly._id})
            .then((res)=>{

                if(toString(res._id) === toString(jilly._id) && res.kittens.length > 0){
                    assert(toString(res.kittens[0]._id) === toString(tilly._id));
                    done()
                }
            });
    });
    it("Queens can find and save a birthday", (done)=>{
        Queen.findOne({_id: jilly._id})
            .then((res)=>{

                if(toString(res._id) === toString(jilly._id) && res.birthday){
                    assert(toString(res.birthday) === toString(new Date("2017-08-05")));
                    done()
                }
            });
    });
    it("Queens can find and save a new owners", (done)=>{
        Queen.findOne({_id: jilly._id})
            .then((res)=>{

                if(toString(res._id) === toString(jilly._id) && res.owner){
                    assert(toString(res.owner) === toString("joe"));
                    done()
                }
            });
    });
    it("Toms can find and save a new image", (done)=>{
        Tom.findOne({_id: oma._id})
            .then((res)=>{
                if(toString(res._id) === toString(oma._id) && res.images.length > 0){
                    assert(toString(res.images[0]) === toString(Image_2.imageUrl));
                    done()
                }
            });
    });
    it("Toms can find and save a new kitten", (done)=>{
        Tom.findOne({_id: oma._id})
            .then((res)=>{

                if(toString(res._id) === toString(oma._id) && res.kittens.length > 0){
                    assert(toString(res.kittens[0]._id) === toString(tilly._id));
                    done()
                }
            });
    });
    it("Toms can find and save a birthday", (done)=>{
        Tom.findOne({_id: oma._id})
            .then((res)=>{

                if(toString(res._id) === toString(oma._id) && res.birthday){
                    assert(toString(res.birthday) === toString(new Date("2017-08-05")));
                    done()
                }
            });
    });
    it("Toms can find and save a new owners", (done)=>{
        Tom.findOne({_id: oma._id})
            .then((res)=>{

                if(toString(res._id) === toString(oma._id) && res.owner){
                    assert(toString(res.owner) === toString("joe"));
                    done()
                }
            });
    });
    it("Kittens can find and save a new image", (done)=>{
        Kitten.findOne({_id: tilly._id})
            .then((res)=>{

                if(toString(res._id) === toString(tilly._id) && res.images.length > 0){
                    assert(toString(res.images[0]) === toString(Image_3.imageUrl));
                    done()
                }
            });
    });
    it("Kittens can find and save a tom", (done)=>{
        Kitten.findOne({_id: tilly._id})
            .then((res)=>{

                if(toString(res._id) === toString(tilly._id) && res.tom){
                    assert(toString(res.tom) === toString(oma._id));
                    done()
                }
            });
    });
    it("Kittens can find and save a queen", (done)=>{
        Kitten.findOne({_id: tilly._id})
            .then((res)=>{

                if(toString(res._id) === toString(tilly._id) && res.queen){
                    assert(toString(res.queen) === toString(jilly._id));
                    done()
                }
            });
    });
    it("Kittens can find and save a birthday", (done)=>{
        Kitten.findOne({_id: tilly._id})
            .then((res)=>{

                if(toString(res._id) === toString(tilly._id) && res.birthday){
                    assert(toString(res.birthday) === toString(new Date("2017-08-05")));
                    done()
                }
            });
    });
    it("Kittens can find and save a new owners", (done)=>{
        Kitten.findOne({_id: tilly._id})
            .then((res)=>{

                if(toString(res._id) === toString(tilly._id) && res.owner){
                    assert(toString(res.owner) === toString("joe"));
                    done()
                }
            });
    });
    it("Image can find and saves a url", (done)=>{
        Image.findOne({_id: Image_1._id})
            .then((res)=>{

                if(toString(res._id) === toString(Image_1._id) && res.imageUrl){
                    assert(toString(res.imageUrl) === toString(Image_1.imageUrl));
                    done()
                }
            });
    });
    it("Image can find and save a new author", (done)=>{
        Image.findOne({_id: Image_1._id})
            .then((res)=>{
                if(toString(res._id) === toString(Image_1._id) && res.author){
                    assert(toString(res.author) === toString("jimmy"));
                    done()
                }
            });
    });
    it("Image can find and save a date", (done)=>{
        Image.findOne({_id: Image_1._id})
            .then((res)=>{

                if(toString(res._id) === toString(Image_1._id) && res.date){
                    assert(toString(res.date) === toString(new Date("2017-08-05")));
                    done()
                }
            });
    });
    it("Image can find and save a title", (done)=>{
        Image.findOne({_id: Image_1._id})
            .then((res)=>{

                if(toString(res._id) === toString(Image_1._id) && res.title){
                    assert(toString(res.title) === toString("my new cat"));
                    done()
                }
            });
    });

});