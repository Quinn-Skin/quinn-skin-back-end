require("dotenv").config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const db = require("./db")
const bodyParser = require("body-parser")
const cors = require("cors")

//Databse conection
db.authenticate().then(() => {
    db.authenticate();
    db.sync()
    console.log('\nConnection has been established successfully.\n')
}).catch(error => {
    console.error(`\nUnable to connect to the database: ${error}\n`)
})

// Midleware
app.use(cors())
app.use(bodyParser.json())
app.use("/products", require("./routes/Produts"))

// Quinn routes
app.get("/",  (req, res) => {
    res.json({
        status: 200,
        message: "Quinn API",
    })
})

app.listen(PORT, () => {
    console.log("\nListening on http://localhost:" + PORT)
})


