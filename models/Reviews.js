const Sequelize = require("sequelize")
const db = require("../db")
const router = require("../routes/Reviews")
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


router

Reviews.belongsTo(Products)
module.exports = Reviews