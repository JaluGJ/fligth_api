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
  
      const [newFlight, isCreated] = await Flight.findOrCreate({
        where: {
          id
        },
        defaults: {
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
        }
      })
      if (!isCreated) return res.status(401).json({message:"the flight is already created"})

      let origin = await Airport.findByPk(ORIGIN_AIRPORT)
      let destination = await Airport.findByPk(DESTINATION_AIRPORT)
      let airline = await Airline.findByPk(AIRLINE)
      
      await newFlight.setAirline(airline, {through: AIRLINE})
      await newFlight.setAirport(origin, {through: ORIGIN_AIRPORT})
      await newFlight.setAirport(destination, {through: DESTINATION_AIRPORT})

      return res.json({data: newFlight})
      
    } catch (error) {
      return res.status(400).json(error)
    }

  }
}

