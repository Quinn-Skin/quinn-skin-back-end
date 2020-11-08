const { Sequelize } = require("sequelize")
let db

const production = true

if (production) {
    db = new Sequelize("postgres://nmfxlkhtwrbgxw:c2281bba624684b99b6c94c875350fa8778147967371099ab7c8e3fc526211d0@ec2-54-158-222-248.compute-1.amazonaws.com:5432/d31i5i63v8bbtg")

} else {
    db = new Sequelize({
        database: process.env.DATABASE,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        dialect: "postgres"
    })
}

module.exports = db