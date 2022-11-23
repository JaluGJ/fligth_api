require("dotenv").config()
const app = require("./src/app")
const { db, Airline, Airport, Flight } = require("./src/db")
const { airlineSeeder } = require("./src/utils/airlineSeed")
const { airportSeeder } = require("./src/utils/airportSeed")
const { flightSeeder } = require("./src/utils/flightSeed")
const { PORT } = process.env

// flightSeeder()

function airports() {
    const airports = airportSeeder()
    airports.forEach(async (el) => {
        const [newAirport, isCreated] = await Airport.findOrCreate({
            where: {
                IATA_CODE: el.IATA_CODE
            },
            defaults: {
                IATA_CODE: el.IATA_CODE,
                AIRPORT: el.AIRPORT,
                CITY: el.CITY,
                STATE: el.STATE,
                COUNTRY: el.COUNTRY,
                LATITUDE: el.LATITUDE,
                LONGITUDE: el.LONGITUDE
            }
        })
        if (isCreated) console.log("already created")
    })
    return
}


function airlines() {
    const airlines = airlineSeeder()
    airlines.forEach(async (el) => {
        const [newAirline, isCreated] = await Airline.findOrCreate({
            where: {
                IATA_CODE: el.IATA_CODE
            },
            defaults: {
                IATA_CODE: el.IATA_CODE,
                AIRLINE: el.AIRLINE
            }
        })
        if (isCreated) console.log("already created")
    })
    return
}

let force = true

db.sync({ force: force }).then(
    async () => {
        app.listen(PORT, () => {
            airlines()
            airports()
            console.log(`listening on port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log("error", error)
    })