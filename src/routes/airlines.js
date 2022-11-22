const { Router } = require ("express")
const {getAllAirlines, getAirline} = require("../controller/airlines/get_airline_controller")
const router = Router()

router.get("/", getAllAirlines)
router.get("/:id", getAirline)

module.exports = router