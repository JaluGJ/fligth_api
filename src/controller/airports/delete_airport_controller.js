const { Airport } = require("../../db")

module.exports={
    deleteAirport: async (req,res) => {
        try {
            const {IATA_CODE} = req.params

            let airport = await Airport.findByPk(IATA_CODE)
            if (!airport) return res.status(404).json({message: "Airport not found"})
            airport.is_deleted = true
            await airport.save()

            return res.json({messaje: "The Airport was deleted succefully"})

        } catch (error) {
            return res.json(400).json(error)
        }
    }
}