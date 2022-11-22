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
            const {IATA_CODE} = req.params
            let airline = await Airline.findByPk(IATA_CODE)
            if (!airline) return res.status(404).json({message: "Airline not found"})
            return res.json({data:airline})
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}