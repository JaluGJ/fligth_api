const { Flight, Airport, Airline } = require("../../db")

module.exports = {
  createNewFligth: async (req, res) => {
    try {
      const {
        id,
        YEAR,
        MONTH,
        DAY,
        DAY_OF_WEEK,
        AIRLINE,//IATA_CODE pk
        FLIGHT_NUMBER,
        TAIL_NUMBER,
        ORIGIN_AIRPORT, //IATA_CODE pk
        DESTINATION_AIRPORT, //IATA_CODE pk
        SCHEDULED_DEPARTURE,
        DEPARTURE_TIME,
        DEPARTURE_DELAY,
        TAXI_OUT,
        WHEELS_OFF,
        SCHEDULED_TIME,
        ELAPSED_TIME,
        AIR_TIME,
        DISTANCE,
        WHEELS_ON,
        TAXI_IN,
        SCHEDULED_ARRIVAL,
        ARRIVAL_TIME,
        ARRIVAL_DELAY,
        DIVERTED,
        CANCELLED,
        CANCELLATION_REASON,
        AIR_SYSTEM_DELAY,
        SECURITY_DELAY,
        AIRLINE_DELAY,
        LATE_AIRCRAFT_DELAY,
        WEATHER_DELAY } = req.body

      if (
        YEAR
        || MONTH
        || DAY
        || DAY_OF_WEEK
        || AIRLINE
        || FLIGHT_NUMBER
        || TAIL_NUMBER
        || ORIGIN_AIRPORT
        || DESTINATION_AIRPORT
        || SCHEDULED_DEPARTURE
        || DEPARTURE_TIME
        || DEPARTURE_DELAY
        || TAXI_OUT
        || WHEELS_OFF
        || SCHEDULED_TIME
        || ELAPSED_TIME
        || AIR_TIME
        || DISTANCE
        || WHEELS_ON
        || TAXI_IN
        || SCHEDULED_ARRIVAL
        || ARRIVAL_TIME
        || ARRIVAL_DELAY
        || DIVERTED
        || CANCELLED
        || CANCELLATION_REASON
        || AIR_SYSTEM_DELAY
        || SECURITY_DELAY
        || AIRLINE_DELAY
        || LATE_AIRCRAFT_DELAY
        || WEATHER_DELAY) return res.status(401).json({ message: "Missing primary information" })

      const newFlight = await Flight.create({
        YEAR,
        MONTH,
        DAY,
        DAY_OF_WEEK,
        FLIGHT_NUMBER,
        TAIL_NUMBER,
        SCHEDULED_DEPARTURE,
        DEPARTURE_TIME,
        DEPARTURE_DELAY,
        TAXI_OUT,
        WHEELS_OFF,
        SCHEDULED_TIME,
        ELAPSED_TIME,
        AIR_TIME,
        DISTANCE,
        WHEELS_ON,
        TAXI_IN,
        SCHEDULED_ARRIVAL,
        ARRIVAL_TIME,
        ARRIVAL_DELAY,
        DIVERTED,
        CANCELLED,
        CANCELLATION_REASON,
        AIR_SYSTEM_DELAY,
        SECURITY_DELAY,
        AIRLINE_DELAY,
        LATE_AIRCRAFT_DELAY,
        WEATHER_DELAY
      })

      let origin = await Airport.findByPk(ORIGIN_AIRPORT)
      await newFlight.setAirport(origin)

      let destination = await Airport.findByPk(DESTINATION_AIRPORT)
      await newFlight.setAirport(destination)

      let airline = await Airline.findByPk(AIRLINE)
      await newFlight.screAirline(airline)


      return res.json({ data: newFlight })

    } catch (error) {
      return res.status(400).json(error)
    }
  }
}

