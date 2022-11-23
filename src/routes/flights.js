const { Router } = require ("express")
const { deleteFlight } = require("../controller/flights/delete_flights_controller")
const { getAllFlights, getFlight } = require("../controller/flights/get_flights_controller")
const { createNewFligth } = require("../controller/flights/post_flights_controller")
const { updateFligth } = require("../controller/flights/put_flights_controller")
const router = Router()

router.get("/", getAllFlights)
router.get("/:id", getFlight)

router.post("/", createNewFligth)

router.put("/", updateFligth )

router.delete("/:id", deleteFlight)

module.exports = router