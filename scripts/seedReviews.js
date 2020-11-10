const Reviews = require("../models/Reviews")
const data = require("../datasets/data")
const faker = require('faker');


// Seed Reviews
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < 3; j++) {
        Reviews.create({
            fullName: faker.name.findName(),
            review: faker.lorem.sentence(9),
            productId: i
        })
    }
}
