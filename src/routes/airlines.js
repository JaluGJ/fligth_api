const { Router } = require("express")
const { deleteAirline } = require("../controller/airlines/delete_airline_controller")
const { getAllAirlines, getAirline } = require("../controller/airlines/get_airline_controller")
const { createNewAirline } = require("../controller/airlines/post_airline_controller")
const { updateAirline } = require("../controller/airlines/put_airline_controller")
const router = Router()

router.get("/", getAllAirlines)
router.get("/:IATA_CODE", getAirline)

router.post("/", createNewAirline)

router.put("/", updateAirline)

router.delete("/:IATA_CODE", deleteAirline)

module.exports = router