const { Airport } = require("../../db")

module.exports = {
  createNewAirport: async (req, res) => {
    try {
      const { IATA_CODE, AIRPORT, CITY, STATE, COUNTRY, LATITUDE, LONGITUDE } = req.body
      if (!IATA_CODE || !AIRPORT || !CITY || STATE || !COUNTRY || !LATITUDE || !LONGITUDE) return res.status(401).json({ message: "Missing primary information" })
      const [newAirport, isCreated] = await Airport.findOrCreate({
        where: {
          IATA_CODE
        },
        defaults: {
          IATA_CODE,
          AIRPORT,
          CITY,
          STATE,
          COUNTRY,
          LATITUDE,
          LONGITUDE
        }
      })
      if (!isCreated) return res.status(401).json({ message: "Airport already exist" })
      return res.json({ message: "New Airport created Succesfully", data: newAirport })
    } catch (error) {
      return res.json(400).json(error)
    }
  }
}