const { Router } = require ("express")
const router = Router()
const Airlines = require("./airlines")
const Airports = require("./airport")
const Flights = require("./flights")


router.use("/airlines", Airlines)
router.use("/aiports", Airports)
router.use("/fligths", Flights)

module.exports = router