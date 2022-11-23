const fs = require("fs");

function airportSeeder() {
	let csv = fs.readFileSync("./archive/airports.csv")
	let array = csv.toString().split("\n")
	let data = []
  let header = array[0].split(",")

	array.forEach((el, i) => {
		if (i === 0) return
		if (!el) return
    let e = el.split(",")

		info = { 
      IATA_CODE: e[0],
      AIRPORT: e[1],
      CITY: e[2],
      STATE: e[3],
      COUNTRY: e[4],
      LATITUDE: e[5],
      LONGITUDE: e[6], 
    }
		return data.push(info)
	})
	return data
}


// airportSeeder()

module.exports = {
	airportSeeder
}