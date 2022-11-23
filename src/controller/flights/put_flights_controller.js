const { Flight, Airport, Airline } = require("../../db")

module.exports = {
  updateFligth: async (req, res) => {
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

      const flight = await Flight.findByPk(id)

        if(YEAR) flight.YEAR = YEAR
        if(MONTH) flight.MONTH = MONTH
        if(DAY) flight.DAY = DAY
        if(DAY_OF_WEEK) flight.DAY_OF_WEEK = DAY_OF_WEEK
        if(FLIGHT_NUMBER) flight.FLIGHT_NUMBER = FLIGHT_NUMBER
        if(TAIL_NUMBER) flight.TAIL_NUMBER = TAIL_NUMBER
        if(SCHEDULED_DEPARTURE) flight.SCHEDULED_DEPARTURE = SCHEDULED_DEPARTURE
        if(DEPARTURE_TIME) flight.DEPARTURE_TIME = DEPARTURE_TIME
        if(DEPARTURE_DELAY) flight.DEPARTURE_DELAY = DEPARTURE_DELAY
        if(TAXI_OUT) flight.TAXI_OUT = TAXI_OUT
        if(WHEELS_OFF) flight.WHEELS_OFF = WHEELS_OFF
        if(SCHEDULED_TIME) flight.SCHEDULED_TIME = SCHEDULED_TIME
        if(ELAPSED_TIME) flight.ELAPSED_TIME = ELAPSED_TIME
        if(AIR_TIME) flight.AIR_TIME = AIR_TIME
        if(DISTANCE) flight.DISTANCE = DISTANCE
        if(WHEELS_ON) flight.WHEELS_ON = WHEELS_ON
        if(TAXI_IN) flight.TAXI_IN = TAXI_IN
        if(SCHEDULED_ARRIVAL) flight.SCHEDULED_ARRIVAL = SCHEDULED_ARRIVAL
        if(ARRIVAL_TIME) flight.ARRIVAL_TIME = ARRIVAL_TIME
        if(ARRIVAL_DELAY) flight.ARRIVAL_DELAY = ARRIVAL_DELAY
        if(DIVERTED) flight.DIVERTED = DIVERTED
        if(CANCELLED) flight.CANCELLED = CANCELLED
        if(CANCELLATION_REASON) flight.CANCELLATION_REASON = CANCELLATION_REASON
        if(AIR_SYSTEM_DELAY) flight.AIR_SYSTEM_DELAY = AIR_SYSTEM_DELAY
        if(SECURITY_DELAY) flight.SECURITY_DELAY = SECURITY_DELAY
        if(AIRLINE_DELAY) flight.AIRLINE_DELAY = AIRLINE_DELAY
        if(LATE_AIRCRAFT_DELAY) flight.LATE_AIRCRAFT_DELAY = LATE_AIRCRAFT_DELAY
        if(WEATHER_DELAY) flight.WEATHER_DELA = WEATHER_DELAY
        if(ORIGIN_AIRPORT) {
          let origin = await Airport.findByPk(ORIGIN_AIRPORT)
          await flight.setAirport(origin)
        }
        if(DESTINATION_AIRPORT){
          let destination = await Airport.findByPk(DESTINATION_AIRPORT)
          await flight.setAirport(destination)
        }
        if(AIRLINE){
          let airline = await Airline.findByPk(AIRLINE)
          await flight.screAirline(airline)
        }
        await flight.save()

      return res.json({ data: flight })

    } catch (error) {
      return res.status(400).json(error)
    }
  }
}
