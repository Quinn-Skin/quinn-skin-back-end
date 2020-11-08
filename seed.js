const Products = require("./models/Produts")
const Reviews = require("./models/Reviews")
const data = require("./data")
const faker = require('faker');


// Seed Products
for (let i = 0, j = 1; i < data.length; j++, i++) {
    Products.create({
        title: data[i].title,
        description: data[i].description,
        url: data[i].image ? data[i].image.slice(1, -1).split(",")[0].slice(1, -8) + "500_.jpg" : 'https://images-na.ssl-images-amazon.com/images/I/21BJjd-RsvL._SS500_.jpg',
        price: data[i].price || 25.99
    })
}


// Seed Reviews
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < 8; j++) {
        Reviews.create({
            fullName: faker.name.findName(),
            review: faker.lorem.sentence(9),
            productId: i
        })
    }
}