const mongoose = require("mongoose");
const assert = require('assert');
const Cat = require("../models/cats");
const Image = require("../models/images");
const Owner = require("../models/owners");

describe("Updates fields after they are saved", ()=>{
    let catOwner2;
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
        catOwner2 = new Owner({
            name: "bob"
        });
        jilly = new Cat({
            name: "jilly",
        });
        oma = new Cat({
            name: "oma",
        });
        tilly = new Cat({
            name: "tilly",
        });
        billy = new Cat({
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
            catOwner2.save(),
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
                    Cat.update({_id: jilly._id}, {$push: { kittens: tilly, images: Image_1}, $set: { birthday: new Date("2017-08-05"), gender: "female", owner: catOwner2}}),
                    Cat.update({_id: oma._id}, {$push: { kittens: tilly, images: Image_2}, $set: { birthday: new Date("2017-08-05"), gender: "male", owner: catOwner2}}),
                    Cat.update({_id: tilly._id}, {$push: {images: Image_3._id}, $set: {birthday: new Date("2017-08-05"), owner: catOwner2, tom: oma, queen: jilly }}),
                    Image.update({_id: Image_1._id}, {$set: { author: "jimmy", date: new Date("2017-08-05"), title: "my new cat"}}),
                    Owner.update({_id: catOwner2._id}, {$set: {pin: "1234"}, $push: {cats: jilly}})
                ])
                    .then(()=> done())
            })
    });

    it("Cats can find and save a new kitten", (done)=>{
        Cat.findOne({_id: jilly._id})
            .then((res)=>{

                if(toString(res._id) === toString(jilly._id) && res.kittens.length > 0){
                    assert(toString(res.kittens[0]._id) === toString(tilly._id));
                    done()
                }
            });
    });


    it("Cats can find and save a new image", (done)=>{
        Cat.findOne({_id: tilly._id})
            .then((res)=>{

                if(toString(res._id) === toString(tilly._id) && res.images.length > 0){
                    assert(toString(res.images[0]) === toString(Image_3.imageUrl));
                    done()
                }
            });
    });
    it("Cats can find and save a tom", (done)=>{
        Cat.findOne({_id: tilly._id})
            .then((res)=>{

                if(toString(res._id) === toString(tilly._id) && res.tom){
                    assert(toString(res.tom) === toString(oma._id));
                    done()
                }
            });
    });
    it("Cats can find and save a queen", (done)=>{
        Cat.findOne({_id: tilly._id})
            .then((res)=>{

                if(toString(res._id) === toString(tilly._id) && res.queen){
                    assert(toString(res.queen) === toString(jilly._id));
                    done()
                }
            });
    });
    it("Cats can find and save a birthday", (done)=>{
        Cat.findOne({_id: tilly._id})
            .then((res)=>{

                if(toString(res._id) === toString(tilly._id) && res.birthday){
                    assert(toString(res.birthday) === toString(new Date("2017-08-05")));
                    done()
                }
            });
    });
    it("Cats can find and save a new owners", (done)=>{
        Cat.findOne({_id: tilly._id})
            .then((res)=>{

                if(toString(res._id) === toString(tilly._id) && res.owner){
                    assert(toString(res.owner) === toString(catOwner2._id));
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
    it("Owners can find and save a cat", (done)=>{
        Owner.findOne({_id: catOwner2._id})
            .then((res)=>{
            if(toString(res._id) === toString(catOwner2._id) && res.cats){
                assert(toString(res.cats[0]._id) === toString(jilly._id));
                done();
            }
        });
    });

});