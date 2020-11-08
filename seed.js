const Products = require("./models/Produts")
const data = require("./data")

// // console.log(data[84].image.slice(1, -1).split(",")[0].slice(0, -8) + "500_.jpg")
for (let i = 0, j = 1; i < data.length; j++, i++) {
    Products.create({
        title: data[i].title,
        description: data[i].description,
        url: data[i].image ? data[i].image.slice(1, -1).split(",")[0].slice(1, -8) + "500_.jpg" : 'https://images-na.ssl-images-amazon.com/images/I/21BJjd-RsvL._SS500_.jpg',
        price: data[i].price || 25.99
    })

    // console.log(data[i].image, i)
}

// console.log(uniqueArray)