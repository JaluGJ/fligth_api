const { Airline } = require("../../db")

module.exports={
    getAllAirlines: async (req,res) => {
        try {
            let airlines = await Airline.findAll()
            return res.json({data: airlines })
        } catch (error) {
            return res.status(400).json(error)
        }
    },
    getAirline: async (req,res) => {
        try {
            const {id} = req.params
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}