const faker = require("faker");
const Cat = require("../models/cats");
const Owner = require("../models/owners");
const Image = require("../models/images");
const Site = require("../models/site");
const mongoose = require("mongoose");

// seed IIFE to seed the data for testing and setting up the client side code
module.exports = (function() {

    // cleans up before each seed by dropping the collections
    const { cats, images, owners, sites } = mongoose.connection.collections;
    Promise.all([ cats.drop(), images.drop(), owners.drop(), sites.drop() ])
        .then(()=>{
            let jikaCat = new Site({
                name: "Jika Cats",
                welcomeMessage: "Welcome to Jika Cats"
            });

            jikaCat.save();

            let jika;
            jika = new Owner({
                name: "jika cats",
                pin: "1234"
            });
            // #######################################################################
            // seed queen1
            let queen1;
            queen1 = new Cat({
                name: faker.name.firstName(),
                birthday: faker.date.past(),
                gender: "female",
                owner: jika
            });
            jika.cats.push(queen1);
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
            queen2 = new Cat({
                name: faker.name.firstName(),
                birthday: faker.date.past(),
                gender: "female",
                owner: jika
            });
            jika.cats.push(queen2);
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
            tom1 = new Cat({
                name: faker.name.firstName(),
                birthday: faker.date.past(),
                gender: "male",
                owner: jika
            });
            jika.cats.push(tom1);
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
            tom2 = new Cat({
                name: faker.name.firstName(),
                birthday: faker.date.past(),
                gender: "male",
                owner: jika
            });
            jika.cats.push(tom2);
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
                let newKitten = new Cat({
                    name: faker.name.firstName(),
                    birthday: faker.date.future(),
                    tom: tom1,
                    queen: queen1,
                    owner: jika
                });

                // add tom and queen to kitten
                tom1.kittens.push(newKitten);
                queen1.kittens.push(newKitten);
                jika.cats.push(newKitten);

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
                let newKitten = new Cat({
                    name: faker.name.firstName(),
                    birthday: faker.date.future(),
                    tom: tom2,
                    queen: queen2,
                    owner: jika
                });

                // add tom and queen to kitten
                tom2.kittens.push(newKitten);
                queen2.kittens.push(newKitten);
                jika.cats.push(newKitten);

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

            jika.save();
        }); // close then()
}()); // close IIFE