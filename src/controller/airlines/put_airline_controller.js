const { Airline } = require("../../db")

module.exports={
    updateAirline: async (req,res) => {
        try {
            const {IATA_CODE, AIRLINE} = req.body

            let airline = await Airline.findByPk(IATA_CODE)
            if (!airline) return res.status(404).json({message: "Airline not found"})
            airline.AIRLINE = AIRLINE
            await airline.save()

            return res.json({data: airline})

        } catch (error) {
            return res.json(400).json(error)
        }
    }
}