const Products = require("../models/Produts")
const data = require("../datasets/data")


// Seed Products
for (let i = 0; i < data.length - 200; i++) {
    Products.create(
        {
            "product_id": data[i].product_id,
            "label": data[i].Label,
            "url": data[i].URL,
            "brand_name": data[i].brand_name,
            "product_name": data[i].product_name,
            "description": data[i].description,
            "price": data[i].price,
            "score": data[i].score,
            "skin_concern": data[i].skin_concern,
            "ingredients": data[i].ingredients,
            "image_url": data[i].image_url.slice(0, -2) + "400",
            "coiled": data[i].Coiled,
            "coily": data[i].Coily,
            "combination": data[i].Combination,
            "curly": data[i].Curly,
            "dry": data[i].Dry,
            "normal": data[i].Normal,
            "oily": data[i].Oily,
            "sensitive": data[i].Sensitive,
            "straight": data[i].Straight,
            "tightly": data[i].Tightly,
            "wavy": data[i].Wavy,
            "and": data[i].and
        }
    )
    // console.log(data[i].image_url.slice(0, -2) + "400");
}