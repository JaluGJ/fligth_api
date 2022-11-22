const { Router } = require ("express")
const {getAllAirlines, getAirline} = require("../controller/airlines/get_airline_controller")
const { createNewAirline } = require("../controller/airlines/post_airline_controller")
const router = Router()

router.get("/", getAllAirlines)
router.get("/:IATA_CODE", getAirline)
router.post("/", createNewAirline)

module.exports = router