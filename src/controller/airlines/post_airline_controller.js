const { Airline } = require("../../db")

module.exports={
    createNewAirline: async (req,res) => {
        try {
            const {IATA_CODE, AIRLINE} = req.body
            if(!IATA_CODE || !AIRLINE) return res.status(401).json({message: "Missing primary information"})
            let [newAirline,isCreated] = await Airline.findOrCreate({
                where:{
                    IATA_CODE
                },
                defaults:{
                    IATA_CODE,
                    AIRLINE
                }
            })
            if (!isCreated) return res.status(401).json({message: "This airline already exists"})
            return res.json({message: "Airline created successfully", data: newAirline})
            
        } catch (error) {
            return res.json(400).json(error)
        }
    }
}