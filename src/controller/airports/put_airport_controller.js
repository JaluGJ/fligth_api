const { Airport } = require("../../db")

module.exports = {
  updateAirport: async (req, res) => {
    try {
      const { IATA_CODE, AIRPORT, CITY, STATE, COUNTRY, LATITUDE,  LONGITUDE} = req.body
      const airport = await Airport.findByPk(IATA_CODE)
        if (AIRPORT) airport.AIRPORT = AIRPORT
        if (CITY) airport.CITY = CITY
        if (STATE) airport.STATE = STATE
        if (COUNTRY) airport.COUNTRY = COUNTRY
        if (LATITUDE) airport.LATITUDE = LATITUDE
        if (LONGITUDE) airport.LONGITUDE = LONGITUDE
      await airport.save()
        
      return res.json({message: "Airport modified Succesfully", data: airport})
  } catch(error) {
    return res.json(400).json(error)
  }
}
}