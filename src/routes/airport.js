const { Router } = require ("express")
const { deleteAirport } = require("../controller/airports/delete_airport_controller")
const { getAllAirports, getAirport } = require("../controller/airports/get_airport_controller")
const { createNewAirport } = require("../controller/airports/post_airport_controller")
const { updateAirport } = require("../controller/airports/put_airport_controller")
const router = Router()

router.get("/", getAllAirports)
router.get("/:IATA_CODE", getAirport)

router.post("/", createNewAirport)

router.put("/", updateAirport)

router.delete("/:IATA_CODE", deleteAirport)

module.exports = router