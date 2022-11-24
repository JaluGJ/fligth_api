require("dotenv").config()
const app = require("./src/app")
const { db, Airline, Airport, Flight } = require("./src/db")
const { airlineSeeder } = require("./src/utils/airlineSeed")
const { airportSeeder } = require("./src/utils/airportSeed")
const { flightSeeder } = require("./src/utils/flightSeed")
const { PORT } = process.env



 function airports() {
  const airports = airportSeeder()
  airports.forEach(async (airport) => {
    const [newAirport, isCreated] = await Airport.findOrCreate({
      where: {
        IATA_CODE: airport.IATA_CODE
      },
      defaults: {
        IATA_CODE: airport.IATA_CODE,
        AIRPORT: airport.AIRPORT,
        CITY: airport.CITY,
        STATE: airport.STATE,
        COUNTRY: airport.COUNTRY,
        LATITUDE: Number(airport.LATITUDE),
        LONGITUDE: Number(airport.LONGITUDE)
      }
    })
    //if (!isCreated) console.log("already created airport")
    //if (isCreated) console.log("creating airport")
  })
  return "airports done"
}


 function airlines() {
  const airlines = airlineSeeder()
  airlines.forEach(async (airline) => {
    const [newAirline, isCreated] = await Airline.findOrCreate({
      where: {
        IATA_CODE: airline.IATA_CODE
      },
      defaults: {
        IATA_CODE: airline.IATA_CODE,
        AIRLINE: airline.AIRLINE
      }
    })
    //if (!isCreated) console.log("already created airline")
    //if (isCreated) console.log("creating airline")
  })
  return "airlines done"
}
/*
 function flights() {
  let flights = flightSeeder()
  flights.forEach(async (flight) => {
    const newFlight = await Flight.create({
      YEAR: flight.YEAR,
      MONTH: flight.MONTH,
      DAY: flight.DAY,
      DAY_OF_WEEK: flight.DAY_OF_WEEK,
      FLIGHT_NUMBER: flight.FLIGHT_NUMBER,
      TAIL_NUMBER: flight.TAIL_NUMBER,
      SCHEDULED_DEPARTURE: flight.SCHEDULED_DEPARTURE,
      DEPARTURE_TIME: flight.DEPARTURE_TIME,
      DEPARTURE_DELAY: flight.DEPARTURE_DELAY,
      TAXI_OUT: flight.TAXI_OUT,
      WHEELS_OFF: flight.WHEELS_OFF,
      SCHEDULED_TIME: flight.SCHEDULED_TIME,
      ELAPSED_TIME: flight.ELAPSED_TIME,
      AIR_TIME: flight.AIR_TIME,
      DISTANCE: flight.DISTANCE,
      WHEELS_ON: flight.WHEELS_ON,
      TAXI_IN: flight.TAXI_IN,
      SCHEDULED_ARRIVAL: flight.SCHEDULED_ARRIVAL,
      ARRIVAL_TIME: flight.ARRIVAL_TIME,
      ARRIVAL_DELAY: flight.ARRIVAL_DELAY,
      DIVERTED: flight.DIVERTED,
      CANCELLED: flight.CANCELLED,
      CANCELLATION_REASON: flight.CANCELLATION_REASON,
      AIR_SYSTEM_DELAY: flight.AIR_SYSTEM_DELAY,
      SECURITY_DELAY: flight.SECURITY_DELAY,
      AIRLINE_DELAY: flight.AIRLINE_DELAY,
      LATE_AIRCRAFT_DELAY: flight.LATE_AIRCRAFT_DELAY,
      WEATHER_DELAY: flight.WEATHER_DELAY
    })
    let airline = await Airline.findByPk(flight.AIRLINE)
    await newFlight.screAirline(airline)

    let origin = await Airport.findByPk(flight.ORIGIN_AIRPORT)
    await newFlight.setAirport(origin)

    let destination = await Airport.findByPk(flight.DESTINATION_AIRPORT)
    await newFlight.setAirport(destination)
  })
  return "done"
}
*/
let force = false

db.sync({ force: force }).then(
  async () => {
    app.listen(PORT, () => {
      let al = airlines() 
      console.log(al)
      let ap = airports()
      console.log(ap)
      //flights()
      console.log(`listening on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.log("error", error)
  })