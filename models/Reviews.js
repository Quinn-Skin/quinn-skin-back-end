const Sequelize = require("sequelize")
const db = require("../db")
const Products = require("./Produts")

const Reviews = db.define("reviews", {
    fullName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    review: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Reviews.belongsTo(Products)
module.exports = Reviews