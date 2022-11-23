const {Flight} = require("../../db")

module.exports={
  getAllFlights: async (req, res) => {
    try {
      const flights = await Flight.findAll()
      return res.json({data:flights})
    } catch (error) {
      return res.status(400).json(error)
    }
  },
  getFlight: async (req,res) => {
    try {
      const {id} = req.params
      const flight = await Flight.findByPk(id)
      if (!flight) return res.status(404).json({message: "Flight not found"})
      return res.json(flight)
    } catch (error) {
      return res.status(400).json(error)
    }
  } 
}