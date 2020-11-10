const { Sequelize } = require("sequelize")
let db

const production = true

if (production) {
    db = new Sequelize("postgres://rixnhoryukwese:e1097a23504add7d0d7353e2f1d14b810a3d78c1c1d937b43637c78c0b3a4834@ec2-52-5-176-53.compute-1.amazonaws.com:5432/d9ji9jebnmdrj3")

} else {
    db = new Sequelize({
        database: "quinn_db",
        username: "postgres",
        password: "Alicia01",
        dialect: "postgres"
    })
}

module.exports = db