const { Airport } = require("../../db")

module.exports= {
  getAllAirports: async (req,res) => {
    try {
      const airports = await Airport.findAll()
      return res.json({data:airports})
    } catch (error) {
      return res.json(400).json(error)
    }
  },
  getAirport: async (req,res) => {
    try {
      const {IATA_CODE} = req.params
      const airport = await Airport.findByPk(IATA_CODE)
      if (!airport) return res.status(404).json({messaje:"Airport not found"})
      return res.json({data: airport})
    } catch (error) {
      return res.json(400).json(error)
    }
  }
}