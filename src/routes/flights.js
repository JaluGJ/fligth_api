const { Router } = require ("express")
const { getAllFlights, getFlight } = require("../controller/flights/get_flights_controller")
const { createNewFligth } = require("../controller/flights/post_flights_controller")
const router = Router()

router.get("/", getAllFlights)
router.get("/:id", getFlight)

router.post("/", createNewFligth)

module.exports = router