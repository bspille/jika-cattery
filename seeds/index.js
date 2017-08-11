const faker = require("faker");
const Kitten = require("../models/kittens");
const Tom = require("../models/toms");
const Queen = require("../models/queens");
const Image = require("../models/images");
const mongoose = require("mongoose");

// seed IIFE to seed the data for testing and setting up the client side code
module.exports = (function() {

    // cleans up before each seed by dropping the collections
    const { kittens, toms, queens, images } = mongoose.connection.collections;
    Promise.all([ kittens.drop(), toms.drop(), queens.drop(), images.drop() ])
        .then(()=>{

            // #######################################################################
            // seed queen1
            let queen1;
            queen1 = new Queen({
                name: faker.name.firstName(),
                birthday: faker.date.past()
            });

            // seed images
            for (let i = 0; i < 10; i++) {
                let newImage = new Image({
                    imageUrl: faker.image.cats(),
                    author: faker.name.findName(),
                    title: faker.lorem.words()
                });
                queen1.images.push(newImage);
                // save images
                newImage.save()
            }

            // #######################################################################
            // seed queen2
            let queen2;
            queen2 = new Queen({
                name: faker.name.firstName(),
                birthday: faker.date.past()
            });

            // seed images
            for (let i = 0; i < 10; i++) {
                let newImage = new Image({
                    imageUrl: faker.image.cats(),
                    author: faker.name.findName(),
                    title: faker.lorem.words()
                });
                queen2.images.push(newImage);
                // save images
                newImage.save()
            }

            // ########################################################################
            // seed tom1
            let tom1;
            tom1 = new Tom({
                name: faker.name.firstName(),
                birthday: faker.date.past()
            });

            // seed images
            for (let i = 0; i < 10; i++) {
                let newImage = new Image({
                    imageUrl: faker.image.cats(),
                    author: faker.name.findName(),
                    title: faker.lorem.words()
                });
                tom1.images.push(newImage);
                // save images
                newImage.save()
            }

            // #######################################################################
            // seed tom2
            let tom2;
            tom2 = new Tom({
                name: faker.name.firstName(),
                birthday: faker.date.past()
            });

            // seed images
            for (let i = 0; i < 10; i++) {
                let newImage = new Image({
                    imageUrl: faker.image.cats(),
                    author: faker.name.findName(),
                    title: faker.lorem.words()
                });
                tom2.images.push(newImage);
                // save images
                newImage.save();
            }

            // #########################################################################
            // seed kittens for tom1 and queen1
            for (let i = 0; i < 20; i++) {
                let newKitten = new Kitten({
                    name: faker.name.firstName(),
                    birthday: faker.date.future(),
                    tom: tom1,
                    queen: queen1
                });

                // add tom and queen to kitten
                tom1.kittens.push(newKitten);
                queen1.kittens.push(newKitten);

                // seed images
                for (let i = 0; i < 10; i++) {
                    let newImage = new Image({
                        imageUrl: faker.image.cats(),
                        author: faker.name.findName(),
                        title: faker.lorem.words()
                    });

                    // add image to kitten then save image
                    newKitten.images.push(newImage);
                    newImage.save();
                }

                // save kitten
                newKitten.save();
            }

            //#########################################################################
            // seed kittens for tom2 and queen2
            for (let i = 0; i < 20; i++) {
                let newKitten = new Kitten({
                    name: faker.name.firstName(),
                    birthday: faker.date.future(),
                    tom: tom2,
                    queen: queen2
                });

                // add tom and queen to kitten
                tom2.kittens.push(newKitten);
                queen2.kittens.push(newKitten);

                // seed images
                for (let i = 0; i < 10; i++) {
                    let newImage = new Image({
                        imageUrl: faker.image.cats(),
                        author: faker.name.findName(),
                        title: faker.lorem.words()
                    });

                    // add image to kitten then save image
                    newKitten.images.push(newImage);
                    newImage.save();
                }

                // save kitten
                newKitten.save();
            }

            // ########################################################################
            // save queens after the kittens where added
            queen1.save();
            queen2.save();

            // save toms after the kittens where added
            tom1.save();
            tom2.save();
        }); // close then()
}()); // close IIFE