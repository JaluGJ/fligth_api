require("dotenv").config()
const app = require("./src/app")
const { db } = require("./src/db")
const { flightSeeder } = require("./src/utils/flightSeed")
const { PORT } = process.env

console.log(flightSeeder())

let force = true

db.sync({ force: force }).then(
    async () => {
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log("error", error)
    })