const fs = require("fs");
const csv = require('csvtojson')
const csvFile = "../../archive/flights.csv"

function flightSeeder() {
  let json = csv()
    .fromFile('./archive/flights.csv')
    .then(jsonObj => jsonObj)
return json

}


module.exports = {
  flightSeeder
}