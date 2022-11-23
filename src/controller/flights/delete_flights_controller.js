const { Flight } = require("../../db")

module.exports = {
  deleteFlight: async (req, res) => {
    try {
      const { id } = req.params
      const flight = await Flight.findByPk(id)
      if (!flight) return res.status(404).json({ message: "Flight not found" })
      flight.is_deleted = true
      await flight.save()
      return res.json({ data: flight })
    } catch (error) {
      return res.status(404).json(error)
    }
  }
}