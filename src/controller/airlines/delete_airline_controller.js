const { Airline } = require("../../db")

module.exports={
    deleteAirline: async (req,res) => {
        try {
            const {IATA_CODE} = req.params

            let airline = await Airline.findByPk(IATA_CODE)
            if (!airline) return res.status(404).json({message: "Airline not found"})
            airline.is_deleted = true
            await airline.save()

            return res.json({messaje: "The airline was deleted succefully"})

        } catch (error) {
            return res.json(400).json(error)
        }
    }
}